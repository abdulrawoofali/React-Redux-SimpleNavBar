import { createStore, combineReducers } from "redux";
import NavReducer from "./reducer";

const rootReducer = combineReducers({
	NavReducer: NavReducer
});

const store = createStore(rootReducer);
export default store;
