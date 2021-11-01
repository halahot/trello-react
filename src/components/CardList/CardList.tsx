import React from 'react'
import Card, { ICard } from '../Card/Card'
import styled from "styled-components";
import { CardTextWrap, CardTitle } from '../Card/AddCardButton';
interface Props {
    cards: Array<ICard>,
    clicked: boolean    
}

export const CardList = (props: Props) => {

    const cards = props.cards.map((card, index) => <Card key={index} card={card}/>)
    return (
        <CardListWrap>
            {cards}
            {props.clicked && <CardTextWrap>
            <CardTitle placeholder="Ввести заголовок для этой карточки" />
          </CardTextWrap>}
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
