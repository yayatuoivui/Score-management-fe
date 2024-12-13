import axios from "axios";
export const FETCH_SCORE_SUCCESS = "FETCH_SCORE_SUCCESS";
export const CREATE_SCORE_SUCCESS = "CREATE_SCORE_SUCCESS";
export const FETCH_SCORE_ERROR = "FETCH_SCORE_ERROR";
export const CREATE_SCORE_ERROR = "CREATE_SCORE_ERROR";
export const CREATE_SCORE_REQUEST = "CREATE_SCORE_REQUEST";
export const FETCH_SCORE_REQUEST = "FETCH_SCORE_REQUEST";
// Fetch Score Action
export const fetchScore = (userId) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_SCORE_REQUEST });
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/score/${userId}`
      );

      if (response && response.data.code === "200") {
        dispatch({
          type: FETCH_SCORE_SUCCESS,
          payload: response.data.data,
        });
        return response.data.data;
      } else {
        throw new Error(response.data.message || "Failed to create score.");
      }
    } catch (error) {
      dispatch({
        type: FETCH_SCORE_ERROR,
        payload: error.message,
      });
      throw error;
    }
  };
};

// Create Score Action
export const createScore = (scoreData) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_SCORE_REQUEST });
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/score`,
        scoreData
      );

      if (response && response.data.code === "200") {
        dispatch({
          type: CREATE_SCORE_SUCCESS,
          payload: response.data.data,
        });
        return response.data.data;
      } else {
        throw new Error(response.data.message || "Failed to create score.");
      }
    } catch (error) {
      dispatch({
        type: CREATE_SCORE_ERROR,
        payload: error.message,
      });
      throw error;
    }
  };
};
