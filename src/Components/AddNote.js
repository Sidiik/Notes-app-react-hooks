import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { NotesContext } from "../helpers/NotesContext";

function AddNote() {
  const { dispatch } = useContext(NotesContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    {
      title &&
        content &&
        dispatch({
          type: "ADD_NOTE",
          note: {
            title,
            content,
          },
        });
    }
    setTitle("");
    setContent("");
  };
  return (
    <div className="container addnote">
      <h4 className="text-primary text-center">Add new note</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <input
            type="text"
            className="form-control"
            placeholder="Note title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-input mt-2">
          <textarea
            placeholder="Note content ..."
            cols="1"
            className="form-control"
            rows="3"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="form-input mt-2">
          <Button type="submit" className="btn-success">
            + Add note
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddNote;
