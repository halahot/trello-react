import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Coordinates } from '../../types'
import { Badges } from '../Badges'
import { CloseIcon } from '../icons'
import { Popup } from '../Popup'
import { SaveButton } from '../SaveButton'

interface Props {
    visible: boolean;
    coordinates: Coordinates;
    onClose: () => void;
    openCard: () => void;
    deleteCard: () => void;
    renameCard: (title: string) => void;
    title: string;
}

// const useFocus = () => {
//     const htmlElRef = useRef(null)
//     const setFocus = () => {htmlElRef.current &&  htmlElRef.current.focus()}

//     return [ htmlElRef, setFocus ] 
// }

export const CardEditModal = ({ title, openCard, renameCard, deleteCard, visible, coordinates, onClose }: Props) => {

    const rootEl = useRef<HTMLTextAreaElement>(document.createElement("textarea"));
    const [text, setTitle] = useState(title);

    useEffect(() => {
        console.log(rootEl)
        // rootEl.current?.focus();
    }, [rootEl])

    const onSave = () => {
        // debugger
        renameCard(text);
    }

    const onSavePressEnter = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            renameCard(text);
        }
    }

    const { x, y } = coordinates;
    return (
        <Popup visible={visible}>
            <Container top={`${y}px`} left={`${x - 236}px`}>
                <TextWrap>
                    <TextBox onChange={(e) => setTitle(e.target.value)} onKeyPress={onSavePressEnter} ref={rootEl} defaultValue={text} />
                    <Badges openCard={openCard} />
                </TextWrap>
                <SaveButton action={onSave} label="Сохранить" />
                <ButtonsWrap>
                    <Button onClick={openCard}>Открыть карточку</Button>
                    <Button onClick={deleteCard}>Удалить</Button>
                </ButtonsWrap>
            </Container>
            <IconWrap onClick={onClose}>
                <CloseIcon width="20" height="20" />
            </IconWrap>
        </Popup>
    )
}

const Container = styled.div<TextWrapProps>`
    display: block;
    position: absolute;
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    z-index: 12;
    width: 275px;
`

const TextWrap = styled.div`
    width: 256px;
    overflow: hidden;
    padding: 6px 8px 2px;
    position: relative;
    z-index: 10;
    background: #fff;
    margin-bottom: 10px;
`

const TextBox = styled.textarea`
    overflow: hidden;
    overflow-wrap: break-word;
    resize: none;
    height: 90px;
    border: none;
`

const IconWrap = styled.div`
    cursor: pointer;
    color: #fff9;
    padding: 9px;
    position: absolute;
    right: 0;
    top: 0;
`

const ButtonsWrap = styled.div`
    left: 100%;
    position: absolute;
    top: 0;
    width: 240px;
    z-index: 0;
`
const Button = styled.a`
    background: #0009;
    border-radius: 3px;
    clear: both;
    color: #e6e6e6;
    display: block;
    float: left;
    margin: 0 0 4px 8px;
    padding: 6px 12px 6px 8px;
    text-decoration: none;
    transition: transform 85ms ease-in;
    cursor: pointer;

    &:hover {
        transform: translateX(13px);
    }
`

interface TextWrapProps {
    readonly top: string;
    readonly left: string;
}
