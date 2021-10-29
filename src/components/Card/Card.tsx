import * as React from 'react';
import { CardWrap } from './style';

export interface ICard {
  title: string
}
export interface ICardProps {
  card: ICard
}

export default function Card (props: ICardProps) {
  return (
    <CardWrap>
      {props.card.title}
    </CardWrap>
  );
}
