import opdrachtReducer from "./opdrachtReducer";
import studentReducer from "./studentReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  opdrachten: opdrachtReducer,
  studenten: studentReducer,
});

export default allReducers;
