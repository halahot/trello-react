import { ITodoList } from "../components/Board";
import { ICard } from "../components/Card";
import { InitialStateType } from "./state";
import { AddCardAction, ColumnEditAction, ColumnEditPayload, Types } from "./types";

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
  action: AddCardAction 
): InitialStateType => {

  switch (action.type) {
    case Types.AddCard:
      return {
        ...state,
        lists: addCard(state.lists, action.payload.id, action.payload.card)
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
    let cards: ICard[]  = column.cards;
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

