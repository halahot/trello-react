import { ITodoList } from "../components/Board/Board";

export type InitialStateType = {
  lists: ITodoList[];
  name: string;
};

const storageLists = localStorage.getItem('lists')
const name = localStorage.getItem('name')

const defaultLists: ITodoList[] =
  [{id: 1, title: "Todo", cards: [] },
  {id: 2, title: "In Progress", cards: [] },
  {id: 3, title: "Testing", cards: [] },
  {id: 4, title: "Done", cards: [] }];

export const initialState: InitialStateType = {
  lists: storageLists ? JSON.parse(storageLists) : defaultLists,
  name: name ? name : ''
};
