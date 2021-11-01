import { useState } from 'react';
import { AddCardButton } from '../Card/AddCardButton';
import { ICard } from '../Card/Card';
import { CardList } from '../CardList/CardList';
import { Title } from './Title';
import styled from "styled-components"

export interface IColumnProps {
  title: string,
  cards: Array<ICard>
  setTitle: (arg0: string) => void
  // isActive: boolean
}



export default function Column(props: IColumnProps) {

  const [clicked, setClicked] = useState(false);

  const onClickAddButton = () => {
    if (!clicked) {
      setClicked(true)
    } else {
      setClicked(false)
    }
  }

  return (
    <ListWrapper>
      <ColumnWrapper>
        <Title text={props.title} setTitle={props.setTitle} />
        <CardList clicked={clicked} cards={props.cards} />
        <AddCardButton clicked={clicked} setClicked={onClickAddButton} />
      </ColumnWrapper>
    </ListWrapper>
  );
}

const ColumnWrapper = styled.div`
    display: flex;
    width: 272px;
    align-items: start;
    background-color: #ebecf0;
    box-sizing: border-box;
    display: inline-block;
    margin: 10px 4px;
    vertical-align: top;
    white-space: nowrap;
    border-radius: 3px;
`

const ListWrapper = styled.div`
    box-sizing: border-box;
    display: inline-block;
    height: 100%;
    margin: 0 4px;
    vertical-align: top;
    white-space: nowrap;
    width: 272px;
`
