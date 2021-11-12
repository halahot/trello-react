import { ICard } from '../Card/Card';
import styled from "styled-components";
import { Column } from '../Column';
import { useReducer, useState } from 'react';
import { initialState } from '../../state/state';
import { listReducer } from '../../state';
import { WelcomeModal } from '../WelcomeModal';

export interface IBoardProps { }

export interface ITodoList {
  id: number,
  title: string,
  cards: ICard[]
}

export default function Board(props: IBoardProps) {

  const [state, ] = useReducer(listReducer, initialState);
  const [visible, setVisible] = useState(!state.name)

  const saveName = (name: string) => {
    localStorage.setItem('name', name);
    setVisible(true);
  }

  const columns = state.lists?.map((list, index) => <Column key={index} list={list} />)

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
