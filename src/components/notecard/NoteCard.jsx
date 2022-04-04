import "./NoteCard.css";
import ReactHtmlParser from "react-html-parser";
import { addToArchive, deleteNote, restoreArchiveNote } from "../../util";
import { useAuth, useNote, useTrash } from "../../context";
import { deleteArchiveNote } from "../../util/deleteArchiveNote";

const NoteCard = ({ note, _id, createdAt, inArchive }) => {
  const { authState } = useAuth();
  const { token } = authState;
  const { noteDispatch } = useNote();
  const { moveToTrash } = useTrash();

  return (
    <div className="note-card">
      <h3>Title</h3>
      {ReactHtmlParser(note)}
      <div className="note-card-bottom-section">
        <h3 className="note-created-date">Created On</h3>
        <div className="note-icon-container">
          <i className="fas fa-palette"></i>
          <i className="fas fa-tag"></i>
          {inArchive ? (
            <i
              className="fa fa-undo"
              aria-hidden="true"
              onClick={() => restoreArchiveNote({ _id, token, noteDispatch })}
            ></i>
          ) : (
            <i
              className="fas fa-archive"
              onClick={() => addToArchive({ _id, noteDispatch, token })}
            ></i>
          )}
          {inArchive ? (
            <i
              className="fas fa-trash"
              onClick={() =>
                deleteArchiveNote({ _id, noteDispatch, token, note })
              }
            ></i>
          ) : (
            <i
              className="fas fa-trash"
              onClick={() => {
                deleteNote({ _id, noteDispatch, token, note });
                moveToTrash({ _id, note });
              }}
            ></i>
          )}
        </div>
      </div>
    </div>
  );
};

export { NoteCard };
