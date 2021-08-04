import uuid from "uuid/dist/v4";
export const NotesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return [
        ...state,
        {
          id: uuid(),
          title: action.note.title,
          content: action.note.content,
        },
      ];
    case "REMOVE_NOTE":
      return state.filter((note) => note.id !== action.id);
  }
};
