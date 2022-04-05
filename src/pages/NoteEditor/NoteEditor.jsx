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
  const [noteProperties, setNoteProperties] = useState({
    title: "Title",
    noteBgColor: "",
  });
  const { noteDispatch } = useNote();
  const { authState } = useAuth();
  const { token } = authState;
  const navigate = useNavigate();
  const { noteBgColor, title } = noteProperties;

  const handleNoteProperties = (e) => {
    const { name, value } = e.target;
    setNoteProperties((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChange = (e) => {
    setNote((prevState) => e);
  };

  const submitHandler = () => {
    addNewNote({ note, token, noteDispatch, navigate, noteBgColor, title });
  };

  return (
    <>
      <Navbar />
      <div className="noteEditor-page-container">
        <Sidebar />
        <div className="note-editor-conatiner">
          <div className="input-group">
            <input
              type="text"
              placeholder="Title"
              name="title"
              onChange={(e) => handleNoteProperties(e)}
            />
          </div>
          <ReactQuill
            className="note-editor"
            value={note}
            onChange={handleChange}
          />
          <button className="btn" onClick={submitHandler}>
            Add new Note
          </button>
          <select
            name="noteBgColor"
            id="bg-color"
            onChange={(e) => handleNoteProperties(e)}
          >
            <option value="">default</option>
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
