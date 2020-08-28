const initialState = {
  videos: null,
  isFetching: false
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  if (type === "SET_TRENDING_VIDEOS") {
    return { ...state, user: payload };
  }
  if (type === "TOGGLE_FETCHING") {
    return { ...state, isFetching: !state.isFetching };
  }

  return state;
};