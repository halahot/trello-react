import React, { useState } from 'react'
import Card, { ICard } from '../Card/Card'
import styled from "styled-components";
import { AddCardButton, CardTextWrap, CardTitle } from '../Card/AddCardButton';
interface Props {
    cards: Array<ICard>,
    // clicked: boolean
    addCard: (card: ICard) => void;
}

export const CardList: React.FC<Props> = ({ cards, addCard }) => {


    const [clicked, setClicked] = useState(false);
    const [newCard, setNewCard] = useState<ICard>();

    const cardsElements = cards?.map((card, index) => <Card key={index} card={card} />)

    const onChangeCardTitle = (e: any) => {
        if(newCard) {
            newCard.title = e.target.value
        } else {
            setNewCard({
                id: Math.round(Math.random() * 10000),
                title: e.target.value
            })
        }
        
    }

    const createCard = () => {
        if(newCard) {
            addCard(newCard);
        }        
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
                <CardTitle onChange={onChangeCardTitle} placeholder="Ввести заголовок для этой карточки" />
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
