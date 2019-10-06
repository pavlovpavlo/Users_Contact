import {createStore, combineReducers} from "redux";
import usersReducer from "./contact_reducer";

let reducers = combineReducers({
    contact: usersReducer
});

let store = createStore(reducers);

export default store;
