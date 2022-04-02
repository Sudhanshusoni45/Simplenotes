import { createContext, useContext, useReducer } from "react";

const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  return (
    <NoteContext.Provider value={{ noteState, noteDispatch }}>
      {children}
    </NoteContext.Provider>
  );
};

export default NoteProvider;
