import { combineReducers } from "redux";
import groceryReducers from "./groceryReducers";
import basketReducers from "./basketReducers";

const rootReducer = combineReducers({
    groceries: groceryReducers,
    baskets: basketReducers
})

export default rootReducer;