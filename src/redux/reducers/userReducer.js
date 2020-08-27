const initialState = {
  user: null,
  isFetching: false
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  if (type === "SET_USER") {
    return { ...state, user: payload };
  }
  if (type === "LOG_OUT") {
    return { ...state, user: null };
  }

  return state;
};