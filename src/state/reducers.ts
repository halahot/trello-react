import { ITodoList } from "../components/Board";
import { ICard } from "../components/Card";
import { CardAction, ColumnEditAction } from "./actions";
import { InitialStateType } from "./state";
import { Types } from "./types";


export const listReducer = (
  state: InitialStateType,
  action: ColumnEditAction
): InitialStateType => {

  switch (action.type) {
    case Types.EditTitle:
      return {
        ...state,
        lists: renameColumn(state.lists, action.payload.id, action.payload.title)
      };
    default: return state;
  }
};

export const cardReducer = (
  state: InitialStateType,
  action: CardAction
): InitialStateType => {

  switch (action.type) {
    case Types.AddCard:
      return {
        ...state,
        lists: addCard(state.lists, action.payload.id, action.payload.card)
      }

    case Types.DeleteCard:
      return {
        ...state,
        lists: deleteCard(state.lists, action.payload.id, action.payload.cardId)
      }
      
    case Types.EditCard:
      return {
        ...state,
        lists: editCard(state.lists, action.payload.id, action.payload.card)
      }
    default: return state;
  }
};



const renameColumn = (lists: ITodoList[], id: number, title: string): ITodoList[] => {
  let column: ITodoList | undefined = lists.find(x => x.id === id);
  const index = lists.findIndex(x => x.id === id);


  if (column) {
    const newEl: ITodoList = {
      ...column,
      title: title
    }

    lists.splice(index, 1, newEl)

    localStorage.setItem('lists', JSON.stringify(lists))

    return lists;
  }

  return lists;
}

function addCard(lists: ITodoList[], id: number, card: ICard): ITodoList[] {
  let column: ITodoList | undefined = lists.find(x => x.id === id);
  const index = lists.findIndex(x => x.id === id);


  if (column) {
    let cards: ICard[] = column.cards;
    cards.push(card);

    const newEl: ITodoList = {
      ...column,
      cards: cards
    }

    lists.splice(index, 1, newEl)

    localStorage.setItem('lists', JSON.stringify(lists))

    return lists;
  }

  return lists;
}

function deleteCard(lists: ITodoList[], id: number, cardId: number): ITodoList[] {
  let column: ITodoList | undefined = lists.find(x => x.id === id);
  const index = lists.findIndex(x => x.id === id);


  if (column) {
    let cards: ICard[] = column.cards;

    const cardIndex = cards.findIndex(x => x.id === cardId);
    cards.splice(cardIndex, 1);

    const newEl: ITodoList = {
      ...column,
      cards: cards
    }

    lists.splice(index, 1, newEl);

    localStorage.setItem('lists', JSON.stringify(lists))

    return lists;
  }

  return lists;
}

function editCard(lists: ITodoList[], id: number, card: ICard): ITodoList[] {
  let column: ITodoList | undefined = lists.find(x => x.id === id);
  const index = lists.findIndex(x => x.id === id);


  if (column) {
    let cards: ICard[] = column.cards;

    const cardIndex = cards.findIndex(x => x.id === card.id);
    cards.splice(cardIndex, 1, card);

    const newEl: ITodoList = {
      ...column,
      cards: cards
    }

    lists.splice(index, 1, newEl);

    localStorage.setItem('lists', JSON.stringify(lists))

    return lists;
  }

  return lists;
}



