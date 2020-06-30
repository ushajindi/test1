import {combineReducers, createStore} from "redux";
import AuthReducer from "./AuthReducer";
import ContactReducer from "./ContactReducer";
import SearchReducer from "./SearchReducer";

const reducers=combineReducers({
    Auth:AuthReducer,
    Contacts:ContactReducer,
    resultSearch:SearchReducer
})

let store = createStore(reducers)

export default store