const authReducer = (state, { type, payload }) => {
  const { token, user } = payload;
  switch (type) {
    case "LOGIN":
      return { user: user, token: token };
    case "SIGNUP":
      return { user: user, token: token };
    default:
      return state;
  }
};

export { authReducer };
