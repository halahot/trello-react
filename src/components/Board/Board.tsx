import * as React from 'react';
import Column from '../Column/Column';
import { BoardWrapper } from './styles';

export interface IBoardProps {
}

export default function Board (props: IBoardProps) {
  return (
    <BoardWrapper>
      <Column title="TODO"/>
      <Column title="In Progress"/>
      <Column title="Testing"/>
      <Column title="Done"/>
    </BoardWrapper>
  );
}
