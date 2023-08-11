import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../Reducer/index.jsx";


let initialstate = {}
const middleware = [thunk]
let store = createStore(
    rootReducer, // kai pan action thase tene hold kari ne nakhse and retrun karse(ana thi app ma badhe commonly data madva na chalu thai jase )
    initialstate, // je retrun karse te ama store thase 
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;