import { ICard } from "../components/Card"

export enum Types {
    EditCard = "EDIT_CARD",
    DeleteCard = "DELETE_CARD",
    AddCard = "ADD_CARD",
    EditTitle = "EDIT_TITLE",
}

export type ColumnEditAction = {
    type: Types,
    payload: ColumnEditPayload
}

export type AddCardAction = {
    type: Types,
    payload: AddCardPayload
}

export type ColumnEditPayload = {
    id: number;
    title: string;
}

export type AddCardPayload = {
    id: number;
    card: ICard;
}
