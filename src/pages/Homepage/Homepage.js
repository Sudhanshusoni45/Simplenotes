import { Navbar, NoteCard, Sidebar } from "../../components/index";
import "./HomePage.css";
const HomePage = () => {
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

export { HomePage };
