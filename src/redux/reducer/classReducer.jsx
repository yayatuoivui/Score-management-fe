import {
  ADD_CLASS_REQUEST,
  ADD_CLASS_SUCCESS,
  ADD_CLASS_FAILURE,
  FETCH_CLASS_REQUEST,
  FETCH_CLASS_SUCCESS,
  FETCH_CLASS_FAILURE,
} from "../action/classAction";

const initialState = {
  class: [],
  loading: false,
  error: null,
};

const classReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLASS_REQUEST:
    case ADD_CLASS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_CLASS_SUCCESS:
      return {
        ...state,
        loading: false,
        CLASSs: action.payload,
        error: null,
      };

    case ADD_CLASS_SUCCESS:
      return {
        ...state,
        loading: false,
        class: [action.payload, ...state.class],
        error: null,
      };
    case FETCH_CLASS_FAILURE:
    case ADD_CLASS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default classReducer;
