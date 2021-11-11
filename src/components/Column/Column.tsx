import { useReducer } from 'react';
import { CardList } from '../CardList';
import { Title } from '../Title';
import styled from "styled-components"
import { ITodoList } from '../Board';
import { cardReducer, listReducer } from '../../state';
import { initialState } from '../../state';
import { Types } from '../../state';
import { ICard } from '../Card';

export interface IColumnProps {
  list: ITodoList;
}



export default function Column(props: IColumnProps) {

  const { list } = props;

  const [, dispatchCard] = useReducer(cardReducer, initialState);
  const [, dispatchList] = useReducer(listReducer, initialState);


  const addCard = (card: ICard) => {
    dispatchCard({
      type: Types.AddCard,
      payload: {
        id: list.id,
        card 
      }
    })
  }
  
  const deleteCard = (cardId: number) => {
    dispatchCard({
      type: Types.DeleteCard,
      payload: {
        id: list.id,
        cardId
      }
    })
  }
  
  const editCard = (card: ICard) => {
    dispatchCard({
      type: Types.EditCard,
      payload: {
        id: list.id,
        card
      }
    })
  }


  const setTitle = (title: string) => {
    dispatchList({
      type: Types.EditTitle,
      payload: {
        id: list.id,
        title
      }
    })
  }

  return (
    <ListWrapper>
      <ColumnWrapper>
        <Title height="28px" text={list.title} setTitle={setTitle} />
        <CardList columnTitle={list.title} addCard={addCard} editCard={editCard} deleteCard={deleteCard} cards={list.cards} />
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
