import { createStore, applyMiddleware } from "redux"
import rootReducers from "./rootReducers"

const store = createStore(rootReducers)

export default store