import { initialState } from "../state";
import { createSlice } from "@reduxjs/toolkit";


export const nameSlice = createSlice({
  name: 'name',
  initialState: initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload
    }
  },
});

export const { setName } = nameSlice.actions;

export default nameSlice.reducer;