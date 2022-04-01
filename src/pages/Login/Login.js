import "./Login.css";

const Login = () => {
  const loginHandler = () => {};
  const changeHandler = () => {};

  return (
    <>
      {/* <Navbar /> */}
      <div className="login-component">
        <form action="" className="login-form" onSubmit={loginHandler}>
          <h1>Login</h1>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              id="email"
              name="email"
              //   value={user.email}
              onChange={changeHandler}
            />

            <label htmlFor="Password">Password</label>
            <input
              type="text"
              name="password"
              id="password"
              //   value={user.password}
              onChange={changeHandler}
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
          {/* <Link to={"/signup"}> New here? Create a new account </Link> */}

          <button className="btn login-btn">Login</button>
        </form>
      </div>
    </>
  );
};

export { Login };
