import { Comment, ICard } from '../../types';

export const addComment = (card: ICard, comment?: string): ICard => {
    if (!comment) return card;

    const newComment: Comment = {
        id: Math.round(Math.random() * 10000),
        text: comment,
        author: localStorage.getItem('name') || ""
    }

    let comments: Comment[] = card.comment ? card.comment : []
    comments?.push(newComment)

    const newCard: ICard = {
        ...card,
        comment: comments
    };

    return newCard;
}

export const editComment = (card: ICard, comment: Comment) => {
    let comments = card.comment;
    const index = comments?.findIndex((x) => x.id === comment.id) || 0
    comments?.splice(index, 1, comment);

    const newCard: ICard = {
        ...card,
        comment: comments
    };
}

export const deleteComment = (card: ICard, id: number) => {
    let comments = card.comment;
    const index = comments?.findIndex((x) => x.id === id) || 0
    comments?.splice(index, 1);


    const newCard: ICard = {
        ...card,
        comment: comments
    };
}