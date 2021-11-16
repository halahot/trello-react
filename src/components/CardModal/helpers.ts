import { Comment, ICard } from '../../types';

// export const addComment = (card: ICard, comment?: string): ICard => {
//     if (!comment) return card;

   

//     return newCard;
// }

export const editComment = (card: ICard, comment: Comment) => {
    let comments = card.comment;
    const index = comments?.findIndex((x: Comment) => x.id === comment.id) || 0
    comments?.splice(index, 1, comment);

    const newCard: ICard = {
        ...card,
        comment: comments
    };

    return newCard;
}

export const deleteComment = (card: ICard, id: number) => {
    let comments = card.comment;
    const index = comments?.findIndex((x: Comment) => x.id === id) || 0
    comments?.splice(index, 1);


    const newCard: ICard = {
        ...card,
        comment: comments

    };

    return newCard;
}