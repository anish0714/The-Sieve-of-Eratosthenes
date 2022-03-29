import { GET_RESULT, ERROR } from "../actions/types";
// initial state of app
const initialState = {
  result: null,
  error: null,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESULT:
      // assign value to result and make error null
      return {
        ...state,
        result: JSON.stringify(action.payload.median),
        error: null,
      };
    case ERROR:
      // assign value to error and make result null
      return {
        ...state,
        error: action.payload,
        result: null,
      };

    default:
      return state;
  }
};
