import opdrachtReducer from "./opdrachtReducer";
import studentReducer from "./studentReducer";
import dataReducer from "./dataReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  opdrachten: opdrachtReducer,
  studenten: studentReducer,
  data: dataReducer,
});

export default allReducers;
