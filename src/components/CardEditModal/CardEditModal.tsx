import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Coordinates } from '../../types'
import { Badges } from '../Badges'
import { CardDeleteModal } from '../CardDeleteModal'
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

export const CardEditModal = ({ title, openCard, renameCard, deleteCard, visible, coordinates, onClose }: Props) => {

    const rootEl = useRef<HTMLTextAreaElement>(document.createElement("textarea"));
    const [text, setTitle] = useState(title);
    const [isDelete, setIsDelete] = useState(false);
    const [coordinatesDel, setCoordinates] = useState<Coordinates>({ x: 0, y: 0 });

    const onSave = () => {
        renameCard(text);
    }

    const onSavePressEnter = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            renameCard(text);
        }
    }

    const onClickDelete = (e: React.MouseEvent) => {
        setCoordinates({ x: e.clientX, y: e.clientY })
        setIsDelete(true);
    }

    const onDelete = () => {
        deleteCard();
        setIsDelete(false);
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
                    <Button onClick={onClickDelete}>Удалить</Button>
                </ButtonsWrap>
            </Container>
            <IconWrap onClick={onClose}>
                <CloseIcon width="20" height="20" />
            </IconWrap>
            <CardDeleteModal
                visible={isDelete}
                coordinates={coordinatesDel}
                onDelete={onDelete}
                onClose={() => setIsDelete(false)} />
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
