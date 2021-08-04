import React, { useContext } from "react";
import { NotesContext } from "../helpers/NotesContext";
import Note from "./Note";

function NotesList() {
  const { notes } = useContext(NotesContext);
  return (
    <div className="notesList container">
      <h1 className="text-center text-success">Notes </h1>

      {notes == 0 && <p>Add notes to render !</p>}
      <div className="list">
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
}

export default NotesList;
