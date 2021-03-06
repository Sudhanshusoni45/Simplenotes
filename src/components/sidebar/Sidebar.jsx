import { Link } from "react-router-dom";
import "./Sidebar.css";
import { useAuth } from "../../context";

const Sidebar = () => {
  const { authState, logoutHandler } = useAuth();
  const {
    user: { firstName, lastName },
  } = authState;
  return (
    <aside className="sidebar-container">
      <ul className="list-reset">
        <li>
          <Link to={"/home"}>
            <i className="sidebar-icons fas fa-home"></i>
            <label className="cursor_pointer" htmlFor="home">
              Home
            </label>
          </Link>
        </li>
        <li>
          <Link to={"/archives"}>
            <i className="sidebar-icons fas fa-archive"></i>
            <label className="cursor_pointer" htmlFor="archive">
              Archive
            </label>
          </Link>
        </li>
        <li>
          <Link to={"/trash"}>
            <i className="sidebar-icons fas fa-trash"></i>
            <label className="cursor_pointer" htmlFor="trash">
              Trash
            </label>
          </Link>
        </li>
        <li>
          <Link to={"/profile"}>
            <i className="sidebar-icons fas fa-user"></i>
            <label className="cursor_pointer" htmlFor="profile">
              Profile
            </label>
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
          <h4>{firstName}</h4>
          <small>
            @{firstName}
            {lastName}
          </small>
        </div>
        <i
          title="logout"
          className="sidebar-icons sidebar-logout fa fa-sign-out"
          aria-hidden="true"
          onClick={() => logoutHandler()}
        ></i>
      </div>
    </aside>
  );
};

export { Sidebar };
