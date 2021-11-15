import styled from "styled-components";
import { Column } from '../Column';
import { WelcomeModal } from '../WelcomeModal/WelcomeModal';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../../state/ducks/name";
import { RootState } from "../../state/store";

export interface IBoardProps { }


export default function Board(props: IBoardProps) {

  const lists = useSelector((state: RootState) => state.lists);
  const name = useSelector((state: RootState) => state.name)
  const dispatch = useDispatch()
  
  const [visible, setVisible] = useState(!!name)

  const saveName = (name: string) => {
    dispatch(setName(name));
    setVisible(true);
  }
  const columns = lists?.map((list, index) => <Column key={index} list={list} />)

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
