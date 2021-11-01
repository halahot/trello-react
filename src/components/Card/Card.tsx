import styled from "styled-components";

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

const CardWrap = styled.div`
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
