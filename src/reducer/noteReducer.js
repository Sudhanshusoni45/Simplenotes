const noteReducer = (state, { type, payload }) => {
  const { notes } = payload;
  switch (type) {
    case "INITIALIZE":
      return [...notes];
    case "ADD_NOTE":
      return [...notes];
    case "DELETE":
      return [...notes];
    default:
      return state;
  }
};

export { noteReducer };
