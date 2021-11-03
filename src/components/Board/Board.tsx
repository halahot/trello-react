import { ICard } from '../Card/Card';
import styled from "styled-components";
import { Column } from '../Column';
import { WelcomeModal } from '../WelcomeModal/WelcomeModal';
import { useReducer, useState } from 'react';
import { initialState } from '../../state/state';
import { listReducer } from '../../state';
import { Types } from '../../state/types';

export interface IBoardProps {}

export interface ITodoList {
  id: number,
  title: string,
  cards: ICard[]
}

export default function Board(props: IBoardProps) {

  // const name: string | null = localStorage.getItem('name');

  const [state, dispatch] = useReducer(listReducer, initialState)
  const [visible, setVisible] = useState(!!state.name)

  const setTitle = (id: number, title: string) => {
    dispatch({
      type: Types.EditTitle,
      payload: {
        id,
        title 
      }
    })
  }

  const saveName = (name: string) => {
    localStorage.setItem('name', name);
    setVisible(true);
  }

  const columns = state.lists?.map((list, index) => <Column key={index} setTitle={setTitle} list={list}/>)

  return (
    <BoardWrapper>
      <WelcomeModal saveName={saveName} visible = {visible}/>
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
