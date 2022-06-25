import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { authReducer } from "../reducer/authReducer";

const AuthContext = createContext(null);

const initialState = {
  token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
};

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialState);
  const navigate = useNavigate();

  const loginHandler = async (userCredentials) => {
    try {
      const url = "/api/auth/login";
      const data = userCredentials;
      const response = await axios.post(url, data);
      const { encodedToken: token, foundUser: user } = response.data;
      if (response.status === 200) {
        authDispatch({ type: "LOGIN", payload: { user: user, token: token } });
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/home");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const signupHandler = async (newUser) => {
    try {
      const url = "/api/auth/signup";
      const data = newUser;
      const response = await axios.post(url, data);
      const { encodedToken: token, createdUser: user } = response.data;
      if (response.status === 201) {
        authDispatch({
          action: "SIGNUP",
          payload: { user: user, token: token },
        });
        localStorage.setItem("token", token);
        navigate("/home");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const logoutHandler = () => {
    authDispatch({
      action: "LOGOUT",
      payload: { user: null, token: null },
    });
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        authDispatch,
        signupHandler,
        loginHandler,
        logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
