import { ICard } from '../Card/Card';
import styled from "styled-components";
import { Column } from '../Column';
import { WelcomeModal } from '../WelcomeModal/WelcomeModal';
import { useReducer, useState } from 'react';
import { initialState } from '../../state/state';
import { listReducer } from '../../state';
import { Types } from '../../state/types';

export interface IBoardProps { }

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

  const columns = state.lists?.map((list, index) => <Column key={index} setTitle={setTitle} list={list} />)

  return (
    <BoardWrapper>
      <WelcomeModal saveName={saveName} visible={visible} />
      <ColumnWrapper>
        {columns}
      </ColumnWrapper>
    </BoardWrapper>
  );
}

export const BoardWrapper = styled.main`
    position: relative;
    overflow-y: auto;
    outline: none;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`

export const ColumnWrapper = styled.div`
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
`
