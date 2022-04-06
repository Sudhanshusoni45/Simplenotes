import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar-container">
      <ul className="list-reset">
        <li>
          <Link to={"/home"}>
            <i className="sidebar-icons fas fa-home"></i>
            <label htmlFor="home">Home</label>
          </Link>
        </li>
        <li>
          <Link to={"/home"}>
            <i className="sidebar-icons fa fa-tag" aria-hidden="true"></i>
            <label htmlFor="label">Label</label>
          </Link>
        </li>
        <li>
          <Link to={"/archives"}>
            <i className="sidebar-icons fas fa-archive"></i>
            <label htmlFor="archive">Archive</label>
          </Link>
        </li>
        <li>
          <Link to={"/trash"}>
            <i className="sidebar-icons fas fa-trash"></i>
            <label htmlFor="trash">Trash</label>
          </Link>
        </li>
        <li>
          <Link to={"/home"}>
            <i className="sidebar-icons fas fa-user"></i>
            <label htmlFor="profile">Profile</label>
          </Link>
        </li>
        <li>
          <Link to={"/noteeditor"}>
            <button className="btn bg-primary">Create New Note</button>
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
        <i
          className="sidebar-icons sidebar-logout fa fa-sign-out"
          aria-hidden="true"
        ></i>
      </div>
    </aside>
  );
};

export { Sidebar };
