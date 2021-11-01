import { useEffect, useRef, useState } from "react";
import styled from "styled-components"
export interface EditableProps {
    text: string,
    setTitle: (arg0: string) => void
}

export const Title = (props: EditableProps) => {

    const [clicked, setClicked] = useState(false);

    const onTitleClick = () => {
        setClicked(true);
    }

    const rootEl = useRef<HTMLTextAreaElement>(document.createElement("textarea"));

    const saveTitle = (e: any) => {
        if (e.key === 'Enter') {
            setClicked(false);
            props.setTitle(e.target.value);
        }
    }

    useEffect(() => {

        const onClick = (e: any) => {
            // console.log("e", e.target);
            // console.log("root", rootEl);
            // console.log(rootEl.current !== (e.target));
            rootEl.current === (e.target) || console.log("");
        }
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);

    return (
        <ColumnTitleWrap onClick={onTitleClick}>
            {!clicked ? <ColumnTitle>{props.text}</ColumnTitle> : <ColumnEditTitle ref={rootEl} onKeyPress={saveTitle} />}
        </ColumnTitleWrap>
    )
}


const ColumnTitle = styled.h2`
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
`

const ColumnEditTitle = styled.textarea`
    font-weight: 600;
    overflow: hidden;
    overflow-wrap: break-word;
    height: 28px;
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