import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  CURRENT_USER,
  USER_LOGOUT,
} from "../action/types";

const initialState = {
  authToken: localStorage.getItem("authToken"),
  isAuthenticated: false,
  user: null,
  errors: null,
  loading:true
};

function authReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CURRENT_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: payload,
        loading:false
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading:false
      };
    case USER_LOGOUT:
      return {
        ...state,
        authToken: null,
        isAuthenticated: false,
        user: null,
        errors: null,
        loading:false
      };
    case USER_LOGIN_FAIL:
      return {
        ...state,
        authToken: null,
        isAuthenticated: false,
        user: null,
        errors: payload,
        loading:false
      };
    default:
      return state;
  }
}

export default authReducer;
