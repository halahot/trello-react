import { ICard } from '../Card/Card';
import styled from "styled-components";
import { Column } from '../Column';
import { Popup } from '../Popup';
import { WelcomeModal } from '../WelcomeModal/WelcomeModal';
import { useEffect, useState } from 'react';

export interface IBoardProps {
}

export interface ITodoList {
  title: string,
  cards: Array<ICard>
}

const defaultColumns: Array<ITodoList> =
  [{ title: "Todo", cards: [{ title: "Сходить в магазин" }, { title: "Полить цветы" }] },
  { title: "Todo", cards: [{ title: "Сходить в магазин" }, { title: "Полить цветы" }] },
  { title: "Todo", cards: [{ title: "Сходить в магазин" }, { title: "Полить цветы" }] },
  { title: "Todo", cards: [{ title: "Сходить в магазин" }, { title: "Полить цветы" }] }];

const name: string | null = localStorage.getItem('name'); 

export default function Board(props: IBoardProps) {

  const [visible, setVisible] = useState(!!name)
  const [lists, setList] = useState<Array<ITodoList>>();

  useEffect(() => {
    const storageLists = localStorage.getItem('lists')
    if(storageLists === null) {
      localStorage.setItem('lists', JSON.stringify(defaultColumns));
      setList(defaultColumns)
    } else {
      setList(JSON.parse(storageLists));
    }
  }, []);

  const setTitle = (text: string) => {
    //здесь потом реализуем запись в локал сторадж

    console.log(text)
  }

  const columns = lists && lists.map((list, index) => <Column key={index} setTitle={setTitle} title={list.title} cards={list.cards}/>)

  const saveName = (name: string) => {
    localStorage.setItem('name', name);
    setVisible(true);
  }

  return (
    <BoardWrapper>
      <WelcomeModal saveName={saveName} visible = {visible}/>
      {columns}
      {/* {!name ? <Popup visible/> : {columns}} */}
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
