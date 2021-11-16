import { CardList } from '../CardList';
import { Title } from '../Title';
import styled from "styled-components"
import { addCard, deleteCard, editCard, renameList } from '../../state/ducks/card';
import { useDispatch } from 'react-redux';
import { ITodoList, ICard } from '../../types';

export interface IColumnProps {
  list: ITodoList;
}

export default function Column(props: IColumnProps) {

  const { list } = props;

  const dispatch = useDispatch()

  const clickAddCard = (card: ICard) => {
    dispatch(addCard({
      id: list.id,
      card
    }))
  }
  const clickDeleteCard = (cardId: number) => {
    dispatch(deleteCard({
      id: list.id,
      cardId
    }))
  }

  const clickEditCard = (card: ICard) => {
    dispatch(editCard({
      id: list.id,
      card
    }))
  }

  const setTitle = (title: string) => {
    dispatch(renameList({
      id: list.id,
      title
    }))
  }

  return (
    <ListWrapper>
      <ColumnWrapper>
        <Title height="28px" text={list.title} setTitle={setTitle} />
        <CardList column={list} addCard={clickAddCard} editCard={clickEditCard} deleteCard={clickDeleteCard} 
        cards={list.cards} />
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
