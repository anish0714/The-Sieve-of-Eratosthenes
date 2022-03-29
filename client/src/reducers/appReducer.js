import { GET_RESULT, ERROR } from "../actions/types";

const initialState = {
  result: null,
  error: null,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESULT:
      return {
        ...state,
        result: JSON.stringify(action.payload.median),
        error: null,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
        result: null,
      };

    default:
      return state;
  }
};
