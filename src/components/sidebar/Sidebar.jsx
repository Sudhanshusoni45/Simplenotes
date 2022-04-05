import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar-container">
      <ul className="list-reset">
        <li>
          <Link to={"/home"}>
            <i className="fas fa-home"></i>
            <label htmlFor="home">Home</label>
          </Link>
        </li>
        <li>
          <Link to={"/home"}>
            <i className="fa fa-tag" aria-hidden="true"></i>
            <label htmlFor="label">Label</label>
          </Link>
        </li>
        <li>
          <Link to={"/archives"}>
            <i className="fas fa-archive"></i>
            <label htmlFor="archive">Archive</label>
          </Link>
        </li>
        <li>
          <Link to={"/trash"}>
            <i className="fas fa-trash"></i>
            <label htmlFor="trash">Trash</label>
          </Link>
        </li>
        <li>
          <Link to={"/home"}>
            <i className="fas fa-user"></i>
            <label htmlFor="profile">Profile</label>
          </Link>
        </li>
        <li>
          <Link to={"/noteeditor"}>
            <button className="btn">Create New Note</button>
          </Link>
        </li>
      </ul>
      <div className="user-logout">
        <img
          className="avatar sm"
          src="https://picsum.photos/200/300"
          alt="user pic"
        />
        <div>
          <h4>Sudhanshu Soni</h4>
          <small>@sudhanshusoni</small>
        </div>
        <i className="fa fa-sign-out" aria-hidden="true"></i>
      </div>
    </aside>
  );
};

export { Sidebar };
