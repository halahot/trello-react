import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components"
export interface EditableProps {
    text: string,
    height: string;
    placeholder?: string;
    setTitle: (arg0: string) => void;
}

export const Title = (props: EditableProps) => {
    const [clicked, setClicked] = useState(false);
    const [text, setText] = useState(props.text);

    const onTitleClick = () => {
        setClicked(true);
    }

    const rootEl = useRef<HTMLTextAreaElement>(document.createElement("textarea"));

    const saveTitle = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            setClicked(false);
            if(text) {
                props.setTitle(text);
            }
        }
    }

    const onChange = (e: any) => {
        setText(e.target.value)
    } 

    useEffect(() => {
        const handleClickOutside = (e: any) => {
            if (rootEl.current && rootEl.current.contains(e.target)) {
                // inside click
                return;
            }
            // outside click
            
            setClicked(false); 
            if(text) {
                props.setTitle(text);
            }
        };
        if (clicked) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [clicked]);

    return (
        <ColumnTitleWrap onClick={onTitleClick}>
            {!clicked ? <ColumnTitle>{text}</ColumnTitle> :
                <ColumnEditTitle height={props.height}
                    placeholder={props.placeholder}
                    onChange={onChange}
                    ref={rootEl}
                    defaultValue={text} 
                    onKeyPress={saveTitle} />}
        </ColumnTitleWrap>
    )
}


const ColumnTitle = styled.h2`
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
`
interface ColumnEditTitleProps {
    height: string;
}

const ColumnEditTitle = styled.textarea<ColumnEditTitleProps>`
    font-weight: 600;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;
    height: ${(props) => props.height};
    background: #0000;
    border-radius: 3px;
    box-shadow: none;
    margin: -4px 0;
    max-height: 256px;
    min-height: 20px;
    padding: 4px 8px;
    resize: none;

    &:focus {
        background-color: #fff;
        box-shadow: inset 0 0 0 2px #0079bf;
    }
`
const ColumnTitleWrap = styled.div`
    display: flex;
    width: 100%;
    height: 40px;
    align-items: center;
    padding: 10px 8px;
    cursor: pointer;
`