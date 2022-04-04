import { createContext, useContext, useState } from "react";

const TrashContext = createContext();

const TrashProvider = ({ children }) => {
  const [trashState, setTrashState] = useState([]);

  const moveToTrash = (trashedNote) => {
    setTrashState((prevState) => [...prevState, trashedNote]);
  };

  return (
    <TrashContext.Provider value={{ trashState, setTrashState, moveToTrash }}>
      {children}
    </TrashContext.Provider>
  );
};

const useTrash = () => useContext(TrashContext);

export { TrashProvider, useTrash };
