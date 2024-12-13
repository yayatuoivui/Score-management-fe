import { combineReducers } from "redux";
import userReducer from "./userReducer";
import subjectReducer from "./subjectReducer";
import classReducer from "./classReducer";
import scoreReducer from "./classReducer";
const rootReducer = combineReducers({
  user: userReducer,
  subjects: subjectReducer,
  class: classReducer,
  score: scoreReducer,
});

export default rootReducer;
