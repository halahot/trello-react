import { ICard } from ".";

export interface ITodoList {
    id: number,
    title: string,
    cards: ICard[]
  }