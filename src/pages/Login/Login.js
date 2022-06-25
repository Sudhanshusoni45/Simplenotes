import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components";
import { useAuth } from "../../context/auth-Context";
import "./Login.css";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const { loginHandler } = useAuth();
  const submitHandler = (e) => {
    e.preventDefault();
    loginHandler(user);
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const addGuestCredentials = () => {
    setUser((prevUser) => ({
      email: "johndoe@gmail.com",
      password: "johnDoe123",
    }));
  };

  return (
    <>
      <Navbar />
      <div className="login-component">
        <form action="" className="login-form" onSubmit={submitHandler}>
          <h1>Login</h1>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              id="email"
              name="email"
              value={user.email}
              onChange={changeHandler}
              required
            />

            <label htmlFor="Password">Password</label>
            <input
              type="text"
              name="password"
              id="password"
              value={user.password}
              onChange={changeHandler}
              required
            />
          </div>

          <div>
            <input type="checkbox" name="rememberMe" />
            <label className="margin-left-xxs" htmlFor="rememberMe">
              Remember me
            </label>
          </div>
          <a href="">
            <small>Forgot your password</small>
          </a>
          <Link to={"/signup"}> New here? Create a new account </Link>

          <button
            className="btn login-btn bg-primary outline-primary"
            onClick={addGuestCredentials}
          >
            Test Login
          </button>
          <button type="submit" className="btn login-btn bg-primary">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export { Login };
