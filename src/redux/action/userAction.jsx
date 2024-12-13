import axios from "axios";

// Action Types
export const ADD_USER_REQUEST = "ADD_USER_REQUEST";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_FAILURE = "ADD_USER_FAILURE";
export const SEARCH_USERS_REQUEST = "SEARCH_USERS_REQUEST";
export const SEARCH_USERS_SUCCESS = "SEARCH_USERS_SUCCESS";
export const SEARCH_USERS_FAILURE = "SEARCH_USERS_FAILURE";

// Action to search for a user by ID number
export const searchUsers = (idNumber) => {
  return async (dispatch) => {
    dispatch({ type: SEARCH_USERS_REQUEST });
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/users/search`,
        { ID_number: idNumber }
      );

      console.log("API Response:", response);

      if (response && response.data.code === "200") {
        dispatch({
          type: SEARCH_USERS_SUCCESS,
          payload: response.data.data,
        });
        return response.data.data;
      } else {
        throw new Error(response.data.message || "Failed to fetch user.");
      }
    } catch (error) {
      dispatch({
        type: SEARCH_USERS_FAILURE,
        payload: error.response?.data?.message || error.message,
      });
      throw error;
    }
  };
};
