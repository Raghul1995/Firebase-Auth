import{combineReducers} from "redux"
import authReducer from "./authReducer"
import projReducer from "./projReducer"
import {firestoreReducer} from "redux-firestore"
import {firebaseReducer} from "react-redux-firebase"
const rootReducer = combineReducers({
    auth: authReducer,
    proj: projReducer,
    firestore: firestoreReducer,
    firebase : firebaseReducer // sinks our authnetication status on firebase with redux app in the state and pop it on the firebase object.

})
    export default  rootReducer