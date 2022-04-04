import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { authReducer } from "../reducer/authReducer";

const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const initialToken = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : "";
  const initialState = { user: "", token: initialToken };

  const [authState, authDispatch] = useReducer(authReducer, initialState);
  const navigate = useNavigate();

  // login
  const loginHandler = async (userCredentials) => {
    try {
      const url = "/api/auth/login";
      const data = userCredentials;
      const response = await axios.post(url, data);
      const { encodedToken: token, foundUser: user } = response.data;
      if (response.status === 200) {
        authDispatch({ type: "LOGIN", payload: { user: user, token: token } });
        console.log("token from loginHandler", token);
        localStorage.setItem("token", token);
        navigate("/home");
      }
    } catch (err) {
      console.error(err);
    }
  };

  // signup
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
  return (
    <AuthContext.Provider
      value={{ authState, authDispatch, signupHandler, loginHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
