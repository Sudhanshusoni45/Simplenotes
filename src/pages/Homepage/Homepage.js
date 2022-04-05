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
  useEffect(() => console.log("noteState", noteState), [noteState]);

  return (
    <>
      <Navbar />
      <div className="homepage-container">
        <Sidebar />
        <div className="note-card-container">
          {notes.length !== 0
            ? notes.map(({ note, createdAt, _id }) => (
                <li key={_id}>
                  <NoteCard
                    note={note}
                    createdAt={createdAt}
                    _id={_id}
                    inArchive={false}
                  />
                </li>
              ))
            : null}
        </div>
      </div>
    </>
  );
};

export { Homepage };
