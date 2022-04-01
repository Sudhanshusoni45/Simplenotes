import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar-container">
      <ul className="list-reset">
        <li>
          <Link to={"/home"}>
            <i className="fas fa-home"></i>
            <label htmlFor="">Home</label>
          </Link>
        </li>
        <li>
          <Link to={"/home"}>
            <i className="fa fa-tag" aria-hidden="true"></i>
            <label htmlFor="">Label</label>
          </Link>
        </li>
        <li>
          <Link to={"/home"}>
            <i className="fas fa-archive"></i>
            <label htmlFor="">Archive</label>
          </Link>
        </li>
        <li>
          <Link to={"/home"}>
            <i className="fas fa-trash"></i>
            <label htmlFor="">Trash</label>
          </Link>
        </li>
        <li>
          <Link to={"/home"}>
            <i className="fas fa-user"></i>
            <label htmlFor="">Profile</label>
          </Link>
        </li>
        <li>
          <button className="btn">Create New Note</button>
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
