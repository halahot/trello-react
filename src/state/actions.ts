import { ICard } from "../components/Card";
import { Types } from "./types";

//column
export type ColumnEditAction = {
    type: Types,
    payload: ColumnEditPayload
}

export type ColumnEditPayload = {
    id: number;
    title: string;
}

//card
type DeleteCardPayload = {
    id: number,
    cardId: number,
};

export type AddCardPayload = {
    id: number;
    card: ICard;
}

export type CardAction =
    | { type: Types.AddCard; payload: AddCardPayload }
    | { type: Types.DeleteCard; payload: DeleteCardPayload }
    | { type: Types.EditCard; error: string };


export function addCard(payload: AddCardPayload): CardAction {
    return { type: Types.AddCard, payload };
}

export function deleteCard(payload: DeleteCardPayload): CardAction {
    return { type: Types.DeleteCard, payload };
}