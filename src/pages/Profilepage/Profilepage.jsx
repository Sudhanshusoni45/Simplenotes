import { Navbar, Sidebar } from "../../components";
import { useAuth } from "../../context";
import "./Profilepage.css";

const Profilepage = () => {
  const {
    authState: {
      user: { firstName, lastName, email },
    },
    logoutHandler,
  } = useAuth();
  return (
    <>
      <Navbar />
      <div className="profile-page-container">
        <Sidebar />
        <div className="profile-container">
          <div className="profile">
            <u>
              <h2>Profile Details</h2>
            </u>
            <div>
              <h3 className="display-inline-block">Name : </h3>
              <span>
                {firstName} {lastName}
              </span>
            </div>
            <div>
              <h3 className="display-inline-block">Email : </h3>
              <span> {email}</span>
            </div>
            <u>
              <h2>Account</h2>
            </u>
            <button className="btn logout-btn" onClick={() => logoutHandler()}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { Profilepage };
