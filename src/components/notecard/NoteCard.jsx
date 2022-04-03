import "./NoteCard.css";
import ReactHtmlParser from "react-html-parser";
import { deleteNote } from "../../util";
import { useAuth, useNote } from "../../context";

const NoteCard = ({ note, _id, createdAt }) => {
  console.log("note:", note);
  const { authState } = useAuth();
  const { token } = authState;
  const { noteDispatch } = useNote();

  return (
    <div className="note-card">
      <h3>Title</h3>
      {ReactHtmlParser(note.note)}

      <div className="note-card-bottom-section">
        <h3 className="note-created-date">Created On</h3>
        <div className="note-icon-container">
          <i className="fas fa-palette"></i>
          <i className="fas fa-tag"></i>
          <i className="fas fa-archive"></i>
          <i
            className="fas fa-trash"
            onClick={() => deleteNote({ _id, noteDispatch, token })}
          ></i>
        </div>
      </div>
    </div>
  );
};

export { NoteCard };
