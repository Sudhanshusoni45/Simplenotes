import { createContext, useContext, useState } from "react";

const TrashContext = createContext();

const TrashProvider = ({ children }) => {
  const [trashState, setTrashState] = useState([]);

  return (
    <TrashContext.Provider value={{ trashState, setTrashState }}>
      {children}
    </TrashContext.Provider>
  );
};

const useTrash = () => useContext(TrashContext);

export { TrashProvider, useTrash };
