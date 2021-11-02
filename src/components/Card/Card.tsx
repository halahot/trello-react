import { useState } from "react";
import styled from "styled-components";
import { CardModal } from "../CardModal";

export interface ICard {
  title?: string
  autor?: string
  description?: string
  comment?: string
}
export interface ICardProps {
  card: ICard
}

export default function Card(props: ICardProps) {

  const { card } = props;
  const [visible, setVisible] = useState(false);

  const onClick = () => {
    setVisible(!visible);
  }

  return (
    <>
      <CardWrap onClick={onClick}>
        {props.card.title}
        <img width="16px" height="16px" alt="comment" src="https://img.icons8.com/material-outlined/24/000000/comments--v1.png"/>
      </CardWrap>
      <CardModal card={card} visible={!visible} onClose={onClick} />
    </>
  );
}

const CardWrap = styled.div`
    gap: 10px;
    background-color: #ffffff;
    border-radius: 3px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    max-height: 100%;
    position: relative;
    white-space: normal;
    padding: 10px 8px;
    margin-bottom: 8px;
    cursor: pointer;
`
