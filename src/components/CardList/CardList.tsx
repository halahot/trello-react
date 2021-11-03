import React, { useState } from 'react'
import Card, { ICard } from '../Card/Card'
import styled from "styled-components";
import { AddCardButton } from '../Card/AddCardButton';
interface Props {
    cards: Array<ICard>,
    // clicked: boolean
    addCard: (card: ICard) => void;
}

export const CardList: React.FC<Props> = ({ cards, addCard }) => {


    const [clicked, setClicked] = useState(false);
    const [text, setText] = useState('');
    // const [newCard, setNewCard] = useState<ICard>();

    const cardsElements = cards?.map((card, index) => <Card key={index} card={card} />)

    const onChangeCardTitle = (e: any) => {
        setText(e.target.value);
    }

    const createCard = () => {
        addCard({
            id: Math.round(Math.random() * 10000),
            title: text
        });
        setText('');
    }

    const onClickAddButton = () => {
        if (!clicked) {
            setClicked(true)
        } else {
            setClicked(false)
        }
    }

    return (
        <CardListWrap>
            {cardsElements}
            {clicked && <CardTextWrap>
                <CardTitle value={text} onChange={onChangeCardTitle} placeholder="Ввести заголовок для этой карточки" />
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
    z-index: 10;
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
    overflow-y: auto;
    padding: 0;
    overflow: hidden;
    overflow-wrap: break-word;
    resize: none;
    height: 54px;
`
