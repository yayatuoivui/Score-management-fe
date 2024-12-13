import {
  SEARCH_USERS_REQUEST,
  SEARCH_USERS_SUCCESS,
  SEARCH_USERS_FAILURE,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
} from "../action/userAction";

const initialState = {
  users: [],
  loading: false,
  error: null,
  totalRows: 0,
  totalPages: 0,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_USERS_REQUEST:
    case ADD_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case SEARCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload ? [action.payload] : [],
        error: null,
      };

    case ADD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: [action.payload, ...state.users],
        error: null,
      };

    case SEARCH_USERS_FAILURE:
    case ADD_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
