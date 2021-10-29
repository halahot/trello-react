import React from 'react'
import Card, { ICard } from '../Card/Card'
import { CardTextWrap, CardTitle } from '../Card/style'
import { CardListWrap } from './styles'

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
