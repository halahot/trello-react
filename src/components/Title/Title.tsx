import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components"
import autosize from 'autosize';
export interface EditableProps {
    text: string,
    height: string;
    placeholder?: string;
    setTitle: (arg0: string) => void;
}

export const Title = ({text, height, placeholder, setTitle}: EditableProps) => {
    const [clicked, setClicked] = useState(false);
    const [tekst, setText] = useState(text);

    const rootEl = useRef<HTMLTextAreaElement>(null);

    const saveTitle = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            rootEl.current?.blur();
            if(tekst.trim()) {
                setTitle(tekst);
            }
            setClicked(false);
        }
    }
    
    useEffect(() => {
        autosize(rootEl.current!);
    }, []);

    const onChange = (e: any) => {
        setText(e.target.value);
    } 

    useEffect(() => {
        const handleClickOutside = (e: any) => {
            if (rootEl.current && rootEl.current.contains(e.target)) {
                // inside click
                return;
            }
            // outside click            
            rootEl.current?.blur(); 
            if(tekst.trim()) {
                debugger
                setTitle(tekst);
            }
        };

        if (clicked) {
            document.addEventListener("mousedown", handleClickOutside);
            rootEl.current?.focus();
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            setClicked(false);
        }
    });

    return (
        <ColumnTitleWrap onClick={() => setClicked(true)}>           
                <ColumnEditTitle height={height}
                    placeholder={placeholder}
                    onChange={onChange}
                    ref={rootEl}
                    value={text} 
                    onKeyPress={saveTitle} />
        </ColumnTitleWrap>
    )
}

interface ColumnEditTitleProps {
    height: string;
}

const ColumnEditTitle = styled.textarea<ColumnEditTitleProps>`
    font-weight: 600;
    width: 100%;
    overflow: hidden scroll;
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
    outline: none;
    border: none;
    cursor: pointer;

    &:focus {
        background-color: #fff;
        box-shadow: inset 0 0 0 2px #0079bf;
    }
`
const ColumnTitleWrap = styled.div`
    display: flex;
    width: 100%;
    min-height: 20px;
    align-items: center;
    padding: 10px 8px;
    cursor: pointer;
`