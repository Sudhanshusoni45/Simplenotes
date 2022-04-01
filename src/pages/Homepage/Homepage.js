import { Navbar, NoteCard, Sidebar } from "../../components/index";
import "./Homepage.css";
const Homepage = () => {
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
