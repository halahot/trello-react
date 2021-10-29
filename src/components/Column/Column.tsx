import { useState } from 'react';
import { AddCardButton } from '../Card/AddCardButton';
import Card, { ICard } from '../Card/Card';
import { CardTextWrap, CardTitle } from '../Card/style';
import { CardList } from '../CardList/CardList';
import { ColumnWrapper, ColumnTitle, ColumnTitleWrap, ListWrapper } from './styles';
import { Title } from './Title';

export interface IColumnProps {
  title: string,
  cards: Array<ICard>
  setTitle: (arg0: string) => void
  // isActive: boolean
}



export default function Column(props: IColumnProps) {

  const [clicked, setClicked] = useState(false);

  const onClickAddButton = () => {
    if (!clicked) {
      setClicked(true)
    } else {
      setClicked(false)
    }
  }

  return (
    <ListWrapper>
      <ColumnWrapper>
        <Title text={props.title} setTitle={props.setTitle}/>
        <CardList clicked={clicked} cards={props.cards}/>          
        <AddCardButton setClicked={onClickAddButton} />
      </ColumnWrapper>
    </ListWrapper>
  );
}
