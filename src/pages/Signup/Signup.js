import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components";
import { useAuth } from "../../context/auth-Context";

const Signup = () => {
  const [newUser, setNewUser] = useState({ email: "", password: "" });
  const { signupHandler } = useAuth();
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    signupHandler(newUser);
  };

  return (
    <>
      <Navbar />

      <div className="login-component">
        <form action="" className="login-form" onSubmit={submitHandler}>
          <h1>Signup</h1>
          <div className="input-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={newUser.firstName}
              onChange={changeHandler}
            />

            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={newUser.lastName}
              onChange={changeHandler}
            />

            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              id="email"
              name="email"
              value={newUser.email}
              onChange={changeHandler}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              name="password"
              value={newUser.password}
              onChange={changeHandler}
              required
            />
          </div>
          <div>
            <input type="checkbox" name="rememberMe" id="rememberMe" />
            <label className="margin-left-xxs" htmlFor="rememberMe">
              Remember me
            </label>
          </div>
          <a href="">
            <small>Forgot your password</small>
          </a>
          <Link to={"/login"}>Already have an account ? Login instead</Link>

          <button className="btn login-btn bg-primary">SignUp</button>
        </form>
      </div>
    </>
  );
};

export { Signup };
