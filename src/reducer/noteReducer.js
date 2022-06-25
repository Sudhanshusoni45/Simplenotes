const noteReducer = (state, { type, payload }) => {
  const { notes } = payload;
  const { archives } = payload;
  switch (type) {
    case "INITIALIZE":
      return { ...state, notes: [...notes] };
    case "ADD_NOTE":
      return { ...state, notes: [...notes] };
    case "UPDATE_NOTE":
      return { ...state, notes: [...notes] };
    case "DELETE":
      return { ...state, notes: [...notes] };
    case "ADD_TO_ARCHIVE":
      return { ...state, archives: [...archives], notes: [...notes] };
    case "RESTORE_ARCHIVE_NOTE":
      return { ...state, archives: [...archives], notes: [...notes] };
    case "RESTORE_FROM_TRASH":
      return { ...state, notes: [...state.notes, notes] };
    case "DELETE_FROM_ARCHIVE":
      return { ...state, archives: [...archives] };
    default:
      return state;
  }
};

export { noteReducer };
