export const setUser = user => {
  localStorage.setItem("accessToken", user.accessToken);
  return {
    type: "SET_USER",
    payload: user
  };
};

export const logOut = () => {
  localStorage.removeItem("accessToken");
  return {
    type: "LOG_OUT"
  };
};