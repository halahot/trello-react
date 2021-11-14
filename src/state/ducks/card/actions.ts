import { createAction } from "@reduxjs/toolkit";
import { AddCardPayload, DeleteCardPayload } from "./types";


export const addCard = createAction<AddCardPayload>("ADD_CARD");
export const deleteCard = createAction<DeleteCardPayload>("DELETE_CARD");
export const editCard = createAction<AddCardPayload>("EDIT_TITLE");

