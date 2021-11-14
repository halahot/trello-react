import { Comment } from ".";

export interface ICard {
    id: number;
    title: string;
    autor: string;
    description?: string;
    comment?: Comment[];
}