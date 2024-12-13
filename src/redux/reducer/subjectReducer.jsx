import {
  ADD_SUBJECT_REQUEST,
  ADD_SUBJECT_SUCCESS,
  ADD_SUBJECT_FAILURE,
  FETCH_SUBJECTS_REQUEST,
  FETCH_SUBJECTS_SUCCESS,
  FETCH_SUBJECTS_FAILURE,
} from "../action/subjectAction";

const initialState = {
  subjects: [],
  loading: false,
  error: null,
};

const subjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUBJECTS_REQUEST:
    case ADD_SUBJECT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_SUBJECTS_SUCCESS:
      return {
        ...state,
        loading: false,
        subjects: action.payload,
        error: null,
      };

    case ADD_SUBJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        subjects: [action.payload, ...state.subjects],
        error: null,
      };
    case FETCH_SUBJECTS_FAILURE:
    case ADD_SUBJECT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default subjectReducer;
