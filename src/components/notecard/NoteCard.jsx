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
import { useNavigate, useLocation } from "react-router-dom";

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
  const location = useLocation();

  return (
    <div
      className={`note-card ${noteBgColor} cursor_pointer`}
      onClick={
        location.pathname === "/home"
          ? () => Navigate(`/noteeditor/${_id}`)
          : null
      }
    >
      <h3>{title}</h3>
      {ReactHtmlParser(note)}
      <div className="note-card-bottom-section">
        <h3 className="note-created-date">{createdAt}</h3>
        <div className="note-icon-container">
          {/* restore note from archive */}
          {inArchive ? (
            <i
              title="restore"
              className="fa fa-undo"
              aria-hidden="true"
              onClick={(e) => {
                restoreArchiveNote({ _id, token, noteDispatch });
                e.stopPropagation();
              }}
            ></i>
          ) : null}

          {/* archives for home page */}
          {location.pathname === "/home" ? (
            <i
              title="archive"
              className="fas fa-archive"
              onClick={(e) => {
                addToArchive({ _id, noteDispatch, token });
                e.stopPropagation();
              }}
            ></i>
          ) : null}

          {/* move to trash from archive */}
          {inArchive ? (
            <i
              title="trash"
              className="fas fa-trash"
              onClick={(e) => {
                moveToTrash({ _id, note, createdAt, title, noteBgColor });
                deleteArchiveNote({ _id, noteDispatch, token, note });
                e.stopPropagation();
              }}
            ></i>
          ) : null}

          {/* delete note from archive */}
          {inArchive ? (
            <i
              title="delete"
              className="fas fa-times"
              onClick={(e) => {
                deleteArchiveNote({ _id, noteDispatch, token, note });
                e.stopPropagation();
              }}
            ></i>
          ) : null}

          {/* restore note from trash */}
          {inTrash ? (
            <i
              title="restore"
              className="fa fa-undo"
              aria-hidden="true"
              onClick={(e) => {
                restoreFromTrash({ _id, token, noteDispatch });
                e.stopPropagation();
              }}
            ></i>
          ) : null}

          {/* delete note from trash */}
          {inTrash ? (
            <i
              title="delete"
              className="fa fa-times"
              aria-hidden="true"
              onClick={(e) => {
                deleteFromTrash(_id);
                e.stopPropagation();
              }}
            ></i>
          ) : null}

          {/* move to trash from home */}
          {location.pathname === "/home" ? (
            <i
              title="trash"
              className="fas fa-trash"
              onClick={(e) => {
                deleteNote({ _id, noteDispatch, token, note });
                moveToTrash({ _id, note, createdAt, title, noteBgColor });
                e.stopPropagation();
              }}
            ></i>
          ) : null}

          {/* delete note from home */}
          {location.pathname === "/home" ? (
            <i
              title="delete"
              className="fas fa-times"
              onClick={(e) => {
                deleteNote({ _id, noteDispatch, token, note });
                e.stopPropagation();
              }}
            ></i>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export { NoteCard };
