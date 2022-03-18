import axios from "../../api/axios";
import { POST_DATA, GET_DATA, DATA_ERROR } from "./types";

export const saveLinks = (linkName, link) => async (dispatch) => {
  const body = { linkName, link };
  try {
    const res = await axios.post("/links/addLinks", body);
    dispatch({
      type: POST_DATA,
      payload: res.data,
    });
  } catch (err) {
    let errors = "Network error";
    if (err.response) {
      errors = err.response.data.msg;
    }
    dispatch({
      type: DATA_ERROR,
      payload: errors,
    });
  }
};

export const getLinks = () => async (dispatch) => {
  try {
    const res = await axios.get("/links/getAllLinks");
    //console.log(res.data);
    dispatch({
      type: GET_DATA,
      payload: res.data,
    });
  } catch (err) {
    let errors = "Network error";
    if (err.response) {
      errors = err.response.data.msg;
    }
    dispatch({
      type: DATA_ERROR,
      payload: errors,
    });
  }
};
