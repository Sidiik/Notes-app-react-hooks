import React, { useState, useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { NotesContext } from "../helpers/NotesContext";

function Note({ note }) {
  const [show, setShow] = useState(false);
  const { dispatch } = useContext(NotesContext);
  return (
    <div className="noteitem container-fluid mt-3">
      {note.length == 0 && <p>No notes to show</p>}
      <div className="card">
        <div className="card-header bg-white">
          <h4>{note.title}</h4>
        </div>
        <div className="card-body">
          <p>{note.content}</p>
        </div>
        <div className="card-footer bg-white d-flex justify-content-between">
          <Button onClick={() => setShow(true)} className="btn-danger">
            Delete
          </Button>
          <Button>Update</Button>
        </div>
      </div>
      <Modal show={show}>
        <Modal.Header>
          <h4>Delete Note</h4>
        </Modal.Header>
        <Modal.Body>
          <h6 className="text-danger">Are you sure you want to delete ?</h6>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShow(false)}>Exit</Button>
          <Button
            className="btn-danger"
            onClick={() => dispatch({ type: "REMOVE_NOTE", id: note.id })}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Note;
