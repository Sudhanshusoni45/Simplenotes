import { useEffect } from "react";
import { Navbar, NoteCard, Sidebar } from "../../components/index";
import { useAuth, useNote } from "../../context";
import { getNotes } from "../../util";
import "./Homepage.css";
const Homepage = () => {
  const { authState } = useAuth();
  const { token } = authState;
  const { noteDispatch } = useNote();
  useEffect(() => getNotes(token, noteDispatch), [authState]);
  return (
    <>
      <Navbar />
      <div className="homepage-container">
        <Sidebar />
        <div className="note-card-container">
          <NoteCard />
          <NoteCard />
          <NoteCard />
        </div>
      </div>
    </>
  );
};

export { Homepage };
