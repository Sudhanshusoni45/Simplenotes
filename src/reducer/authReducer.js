const authReducer = (state, { type, payload }) => {
  const { token } = payload;
  switch (type) {
    case "LOGIN":
      return { token: token };
    case "SIGNUP":
      return { token: token };
    default:
      return state;
  }
};

export { authReducer };
