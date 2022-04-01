import "./NoteCard.css";

const NoteCard = () => {
  return (
    <div className="note-card">
      <h3>Title</h3>
      <p>Body of the note...</p>
      <div className="note-card-bottom-section">
        <h3 className="note-created-date">Created On</h3>
        <div className="note-icon-container">
          <i className="fas fa-palette"></i>
          <i className="fas fa-tag"></i>
          <i className="fas fa-archive"></i>
          <i className="fas fa-trash"></i>
        </div>
      </div>
    </div>
  );
};

export { NoteCard };
