import axios from "axios";

export const ADD_CLASS_REQUEST = "ADD_CLASS_REQUEST";
export const ADD_CLASS_SUCCESS = "ADD_CLASS_SUCCESS";
export const ADD_CLASS_FAILURE = "ADD_CLASS_FAILURE";
export const FETCH_CLASS_REQUEST = "FETCH_CLASS_REQUEST";
export const FETCH_CLASS_SUCCESS = "FETCH_CLASS_SUCCESS";
export const FETCH_CLASS_FAILURE = "FETCH_CLASS_FAILURE";

export const fetchSubjects = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_CLASS_REQUEST });
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/class`);

      if (response && response.code === "200") {
        dispatch({
          type: FETCH_CLASS_SUCCESS,
          payload: response.data,
        });
        return response.data;
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch({
        type: FETCH_CLASS_FAILURE,
        payload: error.message,
      });
      throw error;
    }
  };
};

export const createSubject = (classData) => {
  return async (dispatch) => {
    dispatch({ type: ADD_CLASS_REQUEST });
    try {
      const payload = {
        name: classData.name,
      };

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/class`,
        payload
      );

      if (response && response.code === "200") {
        dispatch({
          type: ADD_CLASS_SUCCESS,
          payload: response.data,
        });
        return response.data;
      } else {
        throw new Error(response.EM);
      }
    } catch (error) {
      dispatch({
        type: ADD_CLASS_FAILURE,
        payload: error.message,
      });
      throw error;
    }
  };
};
