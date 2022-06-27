import { Navbar, NoteCard, Sidebar } from "../../components/index";
import { useTrash } from "../../context";
import "./Trash.css";

const Trash = () => {
  const { trashState } = useTrash();
  return (
    <>
      <Navbar />
      <div className="homepage-container">
        <Sidebar />
        <div className="note-card-container">
          {trashState.length ? (
            trashState.map(({ _id, note, createdAt, noteBgColor, title }) => (
              <li key={_id}>
                <NoteCard
                  _id={_id}
                  inTrash={true}
                  note={note}
                  title={title}
                  noteBgColor={noteBgColor}
                  createdAt={createdAt}
                />
              </li>
            ))
          ) : (
            <h1>There are no notes in trash...</h1>
          )}
        </div>
      </div>
    </>
  );
};

export { Trash };
