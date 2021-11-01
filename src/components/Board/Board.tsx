import { ICard } from '../Card/Card';
import styled from "styled-components";
import { Column } from '../Column';

export interface IBoardProps {
}

export interface ITodoList {
  title: string,
  cards: Array<ICard>
}

const lists: Array<ITodoList> =
  [{ title: "Todo", cards: [{ title: "Сходить в магазин" }, { title: "Полить цветы" }] },
  { title: "Todo", cards: [{ title: "Сходить в магазин" }, { title: "Полить цветы" }] },
  { title: "Todo", cards: [{ title: "Сходить в магазин" }, { title: "Полить цветы" }] },
  { title: "Todo", cards: [{ title: "Сходить в магазин" }, { title: "Полить цветы" }] }];

export default function Board(props: IBoardProps) {

  const setTitle = (text: string) => {
    //здесь потом реализуем запись в локал сторадж

    console.log(text)
  }

  const columns = lists.map((list, index) => <Column key={index} setTitle={setTitle} title={list.title} cards={list.cards}/>)

  return (
    <BoardWrapper>
      {columns}
    </BoardWrapper>
  );
}

export const BoardWrapper = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    background-color: #0079bf;
    height: 100%;
`
