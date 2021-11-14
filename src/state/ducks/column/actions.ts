import { createAction } from "@reduxjs/toolkit";
import { ColumnEditPayload } from "./types";

export const editColumn = createAction<ColumnEditPayload>("EDIT_TITLE");