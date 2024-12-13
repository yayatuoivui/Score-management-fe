import axios from "axios";

export const ADD_SUBJECT_REQUEST = "ADD_SUBJECT_REQUEST";
export const ADD_SUBJECT_SUCCESS = "ADD_SUBJECT_SUCCESS";
export const ADD_SUBJECT_FAILURE = "ADD_SUBJECT_FAILURE";
export const FETCH_SUBJECTS_REQUEST = "FETCH_SUBJECTS_REQUEST";
export const FETCH_SUBJECTS_SUCCESS = "FETCH_SUBJECTS_SUCCESS";
export const FETCH_SUBJECTS_FAILURE = "FETCH_SUBJECTS_FAILURE";

export const fetchSubjects = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_SUBJECTS_REQUEST });
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/subject`
      );
      console.log(response);
      if (response && response.data.code === "200") {
        dispatch({
          type: FETCH_SUBJECTS_SUCCESS,
          payload: response.data.data,
        });
        return response.data.data;
      } else {
        throw new Error(response.data.message || "Failed to fetch subject.");
      }
    } catch (error) {
      dispatch({
        type: FETCH_SUBJECTS_FAILURE,
        payload: error.message,
      });
      throw error;
    }
  };
};

export const createSubject = (subjectData) => {
  return async (dispatch) => {
    dispatch({ type: ADD_SUBJECT_REQUEST });
    try {
      const payload = {
        name: subjectData.name,
      };

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/subject`,
        payload
      );

      if (response && response.data.code === "200") {
        dispatch({
          type: ADD_SUBJECT_SUCCESS,
          payload: response.data.data,
        });
        return response.data.data;
      } else {
        throw new Error(response.EM);
      }
    } catch (error) {
      dispatch({
        type: ADD_SUBJECT_FAILURE,
        payload: error.response?.data?.message || error.message,
      });
      throw error;
    }
  };
};
