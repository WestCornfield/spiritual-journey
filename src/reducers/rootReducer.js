import { combineReducers } from "redux";
import carousel from "./carouselReducer";
import quiz from "./quizReducer";

const rootReducer = combineReducers({carousel, quiz});

export default rootReducer;