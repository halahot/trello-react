import { createSlice } from "@reduxjs/toolkit";
import { ITodoList } from "../../../types";

const defaultLists: ITodoList[] =
  [{ id: 1, title: "Todo", cards: [] },
  { id: 2, title: "In Progress", cards: [] },
  { id: 3, title: "Testing", cards: [] },
  { id: 4, title: "Done", cards: [] }];


export const listSlice = createSlice({
  name: 'list',
  initialState: defaultLists,
  reducers: {
    renameList: (state, action) => {
      const { id, title } = action.payload;
      let index = state.findIndex(x => x.id === id);
      state[index].title = title;
      return state;
    },
    addCard: (state, action) => {
      const { id, card } = action.payload;
      const index = state.findIndex(x => x.id === id);
      state[index].cards.push(card);
    },
    deleteCard: (state, action) => {
      const { id, cardId } = action.payload;
      const index = state.findIndex(x => x.id === id);
      const cardIndex = state[index].cards.findIndex(x => x.id === cardId)
      state[index].cards.splice(cardIndex, 1);
    },
    editCard: (state, action) => {
      const { id, card } = action.payload;
      const index = state.findIndex(x => x.id === id);
      const cardIndex = state[index].cards.indexOf(card);
      state[index].cards.splice(cardIndex, 1, card);
    },
    addComment: (state, action) => {
      debugger
      const { id, cardId, comment } = action.payload;
      const index = state.findIndex(x => x.id === id);
      const cardIndex = state[index].cards.findIndex(x => x.id === cardId);
      state[index].cards[cardIndex].comment?.push(comment);
    }
  },
});

export const { addCard,
   deleteCard,
   editCard,
   addComment,
   renameList } = listSlice.actions;

export default listSlice.reducer;