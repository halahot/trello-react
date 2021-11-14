import { createReducer } from "@reduxjs/toolkit";
import { initialState, InitialStateType } from "../state";
import { editColumn } from "./actions";

const listReducer = createReducer<InitialStateType>(initialState, (builder) => {
    builder
        .addCase(editColumn, (state, action) => {
            const { id, title } = action.payload;
            let index = state.lists.findIndex(x => x.id === id);
            state.lists[index].title = title;
        })
});

export default listReducer;