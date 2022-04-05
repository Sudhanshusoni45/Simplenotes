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
          {trashState.map(({ _id, note }) => (
            <li key={_id}>
              <NoteCard _id={_id} inTrash={true} note={note} />
            </li>
          ))}
        </div>
      </div>
    </>
  );
};

export { Trash };
