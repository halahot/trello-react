import * as React from 'react';
import { ICard } from '../Card/Card';
import Column from '../Column/Column';
import { BoardWrapper } from './styles';

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
