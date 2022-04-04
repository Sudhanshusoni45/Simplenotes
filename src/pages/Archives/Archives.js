import { useNote } from "../../context/note-context";
import { Navbar, NoteCard, Sidebar } from "../../components";
import "./Archives.css";

const Archives = () => {
  const { noteState, noteDispatch } = useNote();
  const { archives } = noteState;
  return (
    <>
      <Navbar />
      <div className="archive-page-container">
        <Sidebar />
        <div className="note-card-container">
          {archives.length !== 0
            ? archives.map(({ note, _id }) => (
                <NoteCard
                  note={note}
                  inArchive={true}
                  _id={_id}
                  noteDispatch={noteDispatch}
                />
              ))
            : null}
        </div>
      </div>
    </>
  );
};

export { Archives };
