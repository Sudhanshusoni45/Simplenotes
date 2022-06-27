import ReactQuill from "react-quill";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { useEffect } from "react";
import { useAuth, useNote } from "../../context";
import { addNewNote, updateNote } from "../../util";
import { useNavigate, useParams } from "react-router-dom";
import "./NoteEditor.css";
import { Navbar, Sidebar } from "../../components";

const NoteEditor = () => {
  const [noteProperties, setNoteProperties] = useState({
    title: "Enter Title",
    noteBgColor: "",
  });
  const [note, setNote] = useState("");
  const { noteState, noteDispatch } = useNote();
  const { authState } = useAuth();
  const { token } = authState;
  const navigate = useNavigate();
  const { noteBgColor, title } = noteProperties;
  const { noteId } = useParams();

  const findNote = () => {
    const res = noteState.notes.find(({ _id }) => _id === noteId);
    if (res) {
      setNote((prevNote) => res.note);
      setNoteProperties((prevState) => ({
        title: res.title,
        noteBgColor: res.noteBgColor,
      }));
    }
  };
  useEffect(() => findNote(), []);

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
    if (!note) {
      alert("Please add note content");
    } else if (!noteId) {
      addNewNote({ note, token, noteDispatch, navigate, noteBgColor, title });
    } else {
      updateNote({ noteId, token, noteDispatch, note, noteProperties });
    }
    navigate("/home");
  };

  return (
    <>
      <Navbar />
      <div className="noteEditor-page-container">
        <Sidebar />
        <div className="test-container">
          <div className="note-editor-container">
            <div className="input-group note-title-container">
              <input
                type="text"
                placeholder="Title"
                name="title"
                className="note-title-input"
                value={noteProperties.title}
                onChange={(e) => handleNoteProperties(e)}
              />
            </div>
            <ReactQuill
              className="note-editor"
              value={note}
              onChange={handleChange}
            />
            <button className="btn outline-primary" onClick={submitHandler}>
              Save Note
            </button>
            <div>
              <label htmlFor="priority">priority: </label>
              <select
                name="noteBgColor"
                id="bg-color"
                onChange={(e) => handleNoteProperties(e)}
              >
                <option value="">gray</option>
                <option value="bg-red">red</option>
                <option value="bg-blue">blue</option>
                <option value="bg-yellow">yellow</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { NoteEditor };
