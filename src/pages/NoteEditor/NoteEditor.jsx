import ReactQuill from "react-quill";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { useEffect } from "react";
import { useAuth, useNote } from "../../context";
import { addNewNote } from "../../util";
import { useNavigate } from "react-router-dom";
import "./NoteEditor.css";
import { Navbar, Sidebar } from "../../components";

const NoteEditor = () => {
  const [note, setNote] = useState("");
  const [noteBgColor, setNoteBgcolor] = useState("red");
  const { noteDispatch } = useNote();
  const { authState } = useAuth();
  const { token } = authState;
  const navigate = useNavigate();
  const handleChange = (e) => {
    setNote(e);
  };

  const submitHandler = () => {
    addNewNote({ note, token, noteDispatch, navigate, noteBgColor });
  };

  return (
    <>
      <Navbar />
      <div className="noteEditor-page-container">
        <Sidebar />
        <div className="note-editor-conatiner">
          <ReactQuill
            className="note-editor"
            value={note}
            onChange={handleChange}
          />
          <button className="btn" onClick={submitHandler}>
            Add new Note
          </button>
          <select
            name="note-bg-color"
            id="bg-color"
            onChange={(e) => setNoteBgcolor((prevColor) => e.target.value)}
          >
            <option value="red">red</option>
            <option value="blue">blue</option>
            <option value="yellow">yellow</option>
          </select>
        </div>
      </div>
    </>
  );
};

export { NoteEditor };
