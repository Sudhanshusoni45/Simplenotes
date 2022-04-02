const noteReducer = (state, { type, payload }) => {
  const { notes } = payload;
  switch (type) {
    case "INITIALIZE":
      return [...notes];
    case "":
      return;
    default:
      return state;
  }
};

export { noteReducer };
