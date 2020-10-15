import{combineReducers} from "redux"
import authReducer from "./authReducer"
import projReducer from "./projReducer"

const rootReducer = combineReducers({
    auth: authReducer,
    proj: projReducer


})
    export default  rootReducer