import axios from "../../api/axios";
import { getLinks } from "../action/links";
import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  CURRENT_USER,
  USER_LOGOUT,
} from "./types";

export const loadUserData = () => async (dispatch) => {
  try {
    const res = await axios.get("/auth/profile");
    dispatch({
      type: CURRENT_USER,
      payload: res.data,
    });
    dispatch(getLinks());
  } catch (err) {
    console.log(err);
  }
};

export const userLogin = (pic, email, tokenId, name) => async (dispatch) => {
  const body = { pic, email, tokenId, name };
  try {
    const res = await axios.post("/auth/login", body);
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUserData());
  } catch (err) {
    let errors = "Network error";
    if (err.response) {
      errors = err.response.data.msg;
    }
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: errors,
    });
  }
};

export const logout = () => ({ type: USER_LOGOUT });
