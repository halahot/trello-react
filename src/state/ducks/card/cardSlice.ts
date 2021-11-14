import { initialState } from "../state";
import { createSlice } from "@reduxjs/toolkit";


export const cardSlice = createSlice({
  name: 'card',
  initialState: initialState,
  reducers: {
    addCard: (state, action) => {
      const { id, card } = action.payload;
      const index = state.lists.findIndex(x => x.id === id);
      state.lists[index].cards.push(card);
    },
    deleteCard: (state, action) => {
      const { id, cardId } = action.payload;
      const index = state.lists.findIndex(x => x.id === id);
      state.lists[index].cards.filter((card) => card.id !== cardId);
    },
    editCard: (state, action) => {
      const { id, card } = action.payload;
      const index = state.lists.findIndex(x => x.id === id);
      const cardIndex = state.lists[index].cards.indexOf(card);
      state.lists[index].cards.splice(cardIndex, 1, card);
    },
  },
});

export const { addCard, deleteCard, editCard } = cardSlice.actions;

export default cardSlice.reducer;