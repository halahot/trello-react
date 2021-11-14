import { ICard } from "../../../types";

export type DeleteCardPayload = {
    id: number,
    cardId: number,
};

export type AddCardPayload = {
    id: number;
    card: ICard;
}