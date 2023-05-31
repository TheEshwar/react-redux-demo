import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./icecream/iceCreamReducer";

const rootReducers = combineReducers({
    cake: cakeReducer,
    icecream: iceCreamReducer
})

export default rootReducers