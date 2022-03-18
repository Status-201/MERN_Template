import { GET_DATA, POST_DATA, DATA_ERROR } from "../action/types";

const initialState = {
  links: null,
  errors: null,
  loading: true,
};

function postReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_DATA:
      return {
        ...state,
        links: payload,
        loading: false,
      };
    case POST_DATA:
      return {
        ...state,
        ...payload,
        loading: false,
      };
    case DATA_ERROR:
      return {
        ...state,
        links: null,
        errors: payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default postReducer;
