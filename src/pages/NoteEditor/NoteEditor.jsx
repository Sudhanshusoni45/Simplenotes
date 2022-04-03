import ReactQuill from "react-quill";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { useEffect } from "react";
import { useAuth, useNote } from "../../context";
import { addNewNote } from "../../util";
import { useNavigate } from "react-router-dom";

const NoteEditor = () => {
  const [note, setNote] = useState();
  const { noteDispatch } = useNote();
  const { authState } = useAuth();
  const { token } = authState;
  const navigate = useNavigate();

  const handleChange = (e) => {
    setNote(e);
  };

  const submitHandler = () => {
    addNewNote({ note, token, noteDispatch, navigate });
  };

  useEffect(() => console.log(note), [note]);
  return (
    <>
      <ReactQuill value={note} onChange={handleChange} />
      <button className="btn" onClick={submitHandler}>
        Add new Note
      </button>
    </>
  );
};

export { NoteEditor };
