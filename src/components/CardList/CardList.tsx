import React, { useState } from 'react'
import Card, { ICard } from '../Card/Card'
import styled from "styled-components";
import { AddCardButton } from '../Card/AddCardButton';
interface Props {
    cards: Array<ICard>,
    columnTitle: string;
    addCard: (card: ICard) => void;
    editCard: (card: ICard) => void;
    deleteCard: (cardId: number) => void;
}

export const CardList: React.FC<Props> = ({ columnTitle, cards, addCard, deleteCard, editCard }) => {


    const [clicked, setClicked] = useState(false);
    const [text, setText] = useState('');

    const cardsElements = cards?.map((card, index) => <Card columnTitle={columnTitle} key={index} editCard={editCard} deleteCard={deleteCard} card={card} />)

    const onChangeCardTitle = (e: any) => {
        setText(e.target.value);
    }

    const createCard = () => {
        if (text.trim()) {
            addCard({
                id: Math.round(Math.random() * 10000),
                title: text,
                description: "",
                autor: localStorage.getItem('name') || ''
            });
        }
        setText('');
    }

    
    const saveTitle = (e: any) => {
        if (e.key === 'Enter') {
            createCard();
        }
    }

    const onClickAddButton = () => {
        if (!clicked) {
            setClicked(true)
        } else {
            setClicked(false)
            setText('');
        }
    }

    return (
        <CardListWrap>
            {cardsElements}
            {clicked && <CardTextWrap>
                <CardTitle value={text} onKeyPress={saveTitle} onChange={onChangeCardTitle} placeholder="Ввести заголовок для этой карточки" />
            </CardTextWrap>}
            <AddCardButton clicked={clicked} addCard={createCard} setClicked={onClickAddButton} />
        </CardListWrap>
    )
}

const CardListWrap = styled.div`
    margin: 0 4px;
    min-height: 0;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0 4px;
    z-index: 1;
`

const CardTextWrap = styled.div`
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 0 #091e4240;
    display: block;
    margin-bottom: 8px;
    max-width: 300px;
    min-height: 20px;
    position: relative;
    text-decoration: none;
    padding: 6px 8px 2px;
    overflow: hidden;
`

const CardTitle = styled.textarea`
    background: none;
    border: none;
    box-shadow: none;
    height: auto;
    margin-bottom: 4px;
    max-height: 162px;
    min-height: 54px;
    width: 100%;
    overflow-y: auto;
    padding: 0;
    overflow: hidden;
    overflow-wrap: break-word;
    resize: none;
    height: 54px;
`
