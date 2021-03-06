import { useEffect } from "react";
import { Navbar, NoteCard, Sidebar } from "../../components/index";
import { useAuth, useNote } from "../../context";
import { getNotes } from "../../util";
import "./Homepage.css";
const Homepage = () => {
  const { authState } = useAuth();
  const { token } = authState;
  const { noteState, noteDispatch } = useNote();
  const { notes } = noteState;
  useEffect(() => getNotes({ token, noteDispatch }), [authState]);

  return (
    <>
      <Navbar />
      <div className="homepage-container">
        <Sidebar />
        <div className="note-card-container">
          {notes.length ? (
            notes.map(({ note, createdAt, _id, noteBgColor, title }) => (
              <li key={_id}>
                <NoteCard
                  note={note}
                  createdAt={createdAt}
                  _id={_id}
                  inArchive={false}
                  noteBgColor={noteBgColor}
                  title={title}
                />
              </li>
            ))
          ) : (
            <h1>You have not created any notes...</h1>
          )}
        </div>
      </div>
    </>
  );
};

export { Homepage };
