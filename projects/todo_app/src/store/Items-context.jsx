import { createContext } from "react";

export const ItemContext = createContext({
  todoitems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});
