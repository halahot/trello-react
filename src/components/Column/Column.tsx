import { useState } from 'react';
import { AddCardButton } from '../Card/AddCardButton';
import Card from '../Card/Card';
import { ColumnWrapper, ColumnTitle, ColumnTitleWrap } from './styles';

export interface IColumnProps {
  title: string,
  // isActive: boolean
}

const cards = [];

export default function Column(props: IColumnProps) {

  const [clicked, setClicked] = useState(false);

  const onClickAddButton = () => {
    if(!clicked) {
        // setClicked(true)
        setClicked(true)
    } else {
        // setClicked(false)
        setClicked(false)
    }
}
  
  return (
    <ColumnWrapper>
      <ColumnTitleWrap>
        <ColumnTitle>{props.title}</ColumnTitle>
      </ColumnTitleWrap>
      {/* {cards.length > 0 ? <Card /> : } */}
      <AddCardButton clicked={clicked} setClicked={onClickAddButton}/>
    </ColumnWrapper>
  );
}
