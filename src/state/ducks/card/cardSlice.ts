import { createSlice } from "@reduxjs/toolkit";
import { ITodoList } from "../../../types";

const defaultLists: ITodoList[] =
  [{ id: 1, title: "Todo", cards: [] },
  { id: 2, title: "In Progress", cards: [] },
  { id: 3, title: "Testing", cards: [] },
  { id: 4, title: "Done", cards: [] }];

type State = { 
  lists: ITodoList[]
}

const initialState: State = {
  lists: defaultLists
} 


export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    renameList: (state, action) => {
      const { id, title } = action.payload;
      let index = state.lists.findIndex(x => x.id === id);
      state.lists[index].title = title;
      return state;
    },
    addCard: (state, action) => {
      const { id, card } = action.payload;
      const index = state.lists.findIndex(x => x.id === id);
      state.lists[index].cards.push(card);
    },
    deleteCard: (state, action) => {
      const { id, cardId } = action.payload;
      const index = state.lists.findIndex(x => x.id === id);
      const cardIndex = state.lists[index].cards.findIndex(x => x.id === cardId)
      state.lists[index].cards.splice(cardIndex, 1);
    },
    editCard: (state, action) => {
      const { id, card } = action.payload;
      const index = state.lists.findIndex(x => x.id === id);
      const cardIndex = state.lists[index].cards.findIndex(
        (item) => item.id === card.id
      );
      state.lists[index].cards.splice(cardIndex, 1, card);
    },
    addComment: (state, action) => {
      const { id, cardId, comment } = action.payload;
      const index = state.lists.findIndex(x => x.id === id);
      const cardIndex = state.lists[index].cards.findIndex(x => x.id === cardId);
      if (state.lists[index].cards[cardIndex].comment) {
        state.lists[index].cards[cardIndex].comment?.push(comment);
      } else {
        state.lists[index].cards[cardIndex].comment = [comment];
      }
    },

    editComment: (state, action) => {
      const { id, cardId, comment } = action.payload;
      const index = state.lists.findIndex(x => x.id === id);
      const cardIndex = state.lists[index].cards.findIndex(x => x.id === cardId);
      const commentIndex = state.lists[index].cards[cardIndex].comment?.findIndex(x => x.id === comment.id);
      if (commentIndex !== undefined && commentIndex > -1) {
        state.lists[index].cards[cardIndex].comment?.splice(commentIndex, 1, comment);
      }
    },

    deleteComment: (state, action) => {
      const { id, cardId, commentId } = action.payload;
      const index = state.lists.findIndex(x => x.id === id);
      const cardIndex = state.lists[index].cards.findIndex(x => x.id === cardId);
      const commentIndex = state.lists[index].cards[cardIndex].comment?.findIndex(x => x.id === commentId);
      if (commentIndex !== undefined && commentIndex > -1) {
        state.lists[index].cards[cardIndex].comment?.splice(commentIndex, 1);
      }
    }
  },
});

export const { addCard,
  deleteCard,
  editCard,
  addComment,
  editComment, 
  deleteComment,
  renameList } = listSlice.actions;

export default listSlice.reducer;