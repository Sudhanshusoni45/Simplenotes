import "./NoteCard.css";
import ReactHtmlParser from "react-html-parser";
import {
  addToArchive,
  deleteNote,
  restoreArchiveNote,
  updateNote,
} from "../../util";
import { useAuth, useNote, useTrash } from "../../context";
import { deleteArchiveNote } from "../../util/deleteArchiveNote";
import { useNavigate } from "react-router-dom";

const NoteCard = ({
  note,
  _id,
  createdAt,
  inArchive,
  inTrash,
  noteBgColor,
  title,
}) => {
  const { authState } = useAuth();
  const { token } = authState;
  const { noteDispatch } = useNote();
  const { moveToTrash, deleteFromTrash, restoreFromTrash } = useTrash();
  const Navigate = useNavigate();

  return (
    <div
      className={`note-card ${noteBgColor} cursor_pointer`}
      onClick={() => Navigate(`/noteeditor/${_id}`)}
    >
      <h3>{title}</h3>
      {ReactHtmlParser(note)}
      <div className="note-card-bottom-section">
        <h3 className="note-created-date">{createdAt}</h3>
        <div className="note-icon-container">
          <i className="fas fa-tag"></i>
          {inArchive ? (
            <i
              className="fa fa-undo"
              aria-hidden="true"
              onClick={(e) => {
                restoreArchiveNote({ _id, token, noteDispatch });
                e.stopPropagation();
              }}
            ></i>
          ) : (
            <i
              className="fas fa-archive"
              onClick={(e) => {
                addToArchive({ _id, noteDispatch, token });
                e.stopPropagation();
              }}
            ></i>
          )}
          {inArchive ? (
            <i
              className="fas fa-trash"
              onClick={() => {
                deleteArchiveNote({ _id, noteDispatch, token, note });
                e.stopPropagation();
              }}
            ></i>
          ) : null}
          {inTrash ? (
            <i
              className="fa fa-undo"
              aria-hidden="true"
              onClick={() => {
                restoreFromTrash({ _id, token, noteDispatch });
                e.stopPropagation();
              }}
            ></i>
          ) : null}

          {inTrash ? (
            <i
              className="fa fa-times"
              aria-hidden="true"
              onClick={() => {
                deleteFromTrash(_id);
                e.stopPropagation();
              }}
            ></i>
          ) : (
            <i
              className="fas fa-trash"
              onClick={() => {
                deleteNote({ _id, noteDispatch, token, note });
                moveToTrash({ _id, note, createdAt, title, noteBgColor });
                e.stopPropagation();
              }}
            ></i>
          )}
        </div>
      </div>
    </div>
  );
};

export { NoteCard };
