import React, { createContext, useReducer } from "react";
import { NotesReducer } from "./reducers/NotesReducer";
import uuid from "uuid/dist/v4";

export const NotesContext = createContext();

export const NotesContextProvider = ({ children }) => {
  const [notes, dispatch] = useReducer(NotesReducer, [
    {
      id: uuid(),
      title: "The tommorow vission",
      content: "content goes here !",
    },
    {
      id: uuid(),
      title: "The tommorow vission",
      content: "content goes here !",
    },
  ]);
  return (
    <NotesContext.Provider value={{ notes, dispatch }}>
      {children}
    </NotesContext.Provider>
  );
};
