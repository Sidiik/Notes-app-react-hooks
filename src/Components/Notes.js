import React from "react";
import AddNote from "./AddNote";
import { NotesContextProvider } from "../helpers/NotesContext";
import NotesList from "./NotesList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavbarBar from "./Navbar";
function Notes() {
  return (
    <NotesContextProvider>
      <div className="">
        <Router>
          <NavbarBar />
          <Route path="/" exact component={NotesList} />
          <Route path="/addnote" component={AddNote} />
        </Router>
      </div>
    </NotesContextProvider>
  );
}

export default Notes;
