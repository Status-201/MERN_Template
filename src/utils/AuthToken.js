import api from "../api/axios";

export const setAuthToken = (authToken) => {
  if (authToken) {
    api.defaults.headers.common["Bearer"] = authToken;
    localStorage.setItem("authToken", authToken);
  } else {
    delete api.defaults.headers.common["Bearer"];
    localStorage.removeItem("authToken");
  }
};
