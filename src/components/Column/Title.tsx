import { KeyboardEventHandler, useEffect, useRef, useState } from "react";
import { ColumnTitleWrap, ColumnTitle, ColumnEditTitle } from "./styles"

export interface EditableProps {
    text: string,
    setTitle: (arg0: string) => void
}

export const Title = (props: EditableProps) => {

    const [clicked, setClicked] = useState(false);

    const onTitleClick = () => {
        setClicked(true);
    }

    const rootEl  = useRef<HTMLTextAreaElement>(document.createElement("textarea"));

    const saveTitle = (e:any ) => {
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
            {!clicked ? <ColumnTitle>{props.text}</ColumnTitle> : <ColumnEditTitle ref={rootEl} onKeyPress={saveTitle}/>}
        </ColumnTitleWrap>
    )
}
