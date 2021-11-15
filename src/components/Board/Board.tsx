import styled from "styled-components";
import { Column } from '../Column';
import { WelcomeModal } from '../WelcomeModal/WelcomeModal';
import { useState } from 'react';
import { InitialStateType } from '../../state/ducks/state';
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../../state/ducks/name";
import { ITodoList } from "../../types";

export interface IBoardProps { }


export default function Board(props: IBoardProps) {

  // const lists = useSelector((state: InitialStateType) => state.lists)
  const defaultLists: ITodoList[] =
    [{ id: 1, title: "Todo", cards: [] },
    { id: 2, title: "In Progress", cards: [] },
    { id: 3, title: "Testing", cards: [] },
    { id: 4, title: "Done", cards: [] }];
  const name = useSelector((state: InitialStateType) => state.name)
  const dispatch = useDispatch()
  
  const [visible, setVisible] = useState(!!name)

  const saveName = (name: string) => {
    dispatch(setName(name));
    setVisible(true);
  }
debugger
  const columns = defaultLists?.map((list, index) => <Column key={index} list={list} />)

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
