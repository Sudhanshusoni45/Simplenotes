import { createContext, useContext, useState } from "react";

const TrashContext = createContext();

const TrashProvider = ({ children }) => {
  const [trashState, setTrashState] = useState([]);

  const moveToTrash = (trashedNote) => {
    setTrashState((prevState) => [...prevState, trashedNote]);
  };

  const deleteFromTrash = (_id) => {
    const newState = trashState.filter((item) => item._id !== _id);
    setTrashState((prevState) => newState);
  };

  return (
    <TrashContext.Provider
      value={{ trashState, setTrashState, moveToTrash, deleteFromTrash }}
    >
      {children}
    </TrashContext.Provider>
  );
};

const useTrash = () => useContext(TrashContext);

export { TrashProvider, useTrash };
