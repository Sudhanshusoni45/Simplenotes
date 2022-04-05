import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addNewNote } from "../util";

const TrashContext = createContext();

const TrashProvider = ({ children }) => {
  const [trashState, setTrashState] = useState([]);
  const navigate = useNavigate();

  const moveToTrash = (trashedNote) => {
    setTrashState((prevState) => [...prevState, trashedNote]);
  };

  const deleteFromTrash = (_id) => {
    const newState = trashState.filter((item) => item._id !== _id);
    setTrashState((prevState) => newState);
  };

  const restoreFromTrash = ({ _id, noteDispatch, token }) => {
    const { note } = trashState.find((item) => item._id === _id);
    addNewNote({ noteDispatch, note, token, navigate });
    deleteFromTrash(_id);
  };

  return (
    <TrashContext.Provider
      value={{
        trashState,
        setTrashState,
        moveToTrash,
        deleteFromTrash,
        restoreFromTrash,
      }}
    >
      {children}
    </TrashContext.Provider>
  );
};

const useTrash = () => useContext(TrashContext);

export { TrashProvider, useTrash };
