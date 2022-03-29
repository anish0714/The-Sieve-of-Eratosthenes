import { GET_RESULT, ERROR } from "../actions/types";
import axios from "axios";

export const getMedian = (val) => async (dispatch) => {
  try {
    // console.log(val);

    const res = await axios.get(
      `http://localhost:5000/primeNumber/getMedian/${val}`
    );
    // console.log(res.data);
    if (res.data) {
      const { status } = res.data;
      if (status) {
        dispatch({
          type: GET_RESULT,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR,
          payload: res.data.msg,
        });
      }
    }
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err,
    });
  }
};
