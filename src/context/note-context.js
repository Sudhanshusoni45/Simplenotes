import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { noteReducer } from "../reducer";
import { useAuth } from "./auth-Context";

const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const { authState } = useAuth();
  const { token } = authState;

  const initialState = {
    notes: [],
    archives: [],
  };
  const [noteState, noteDispatch] = useReducer(noteReducer, initialState);
  return (
    <NoteContext.Provider value={{ noteState, noteDispatch }}>
      {children}
    </NoteContext.Provider>
  );
};

const useNote = () => useContext(NoteContext);

export { NoteProvider, useNote };
