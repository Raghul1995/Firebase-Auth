const initState ={
authError: null
}

const authReducers =(state=initState, action)=>{
    switch(action.type){
        case "LOGIN_FAILED":
            return{
                ...state,
                authError : "Login failed"
            }
            case "LOGIN_SUCCESS":
                
            return {
                ...state,
                authError : "Login null"
            }
            case "SIGNOUT_SUCCESS":
            return state
            default: 
            return  state;
    }

}
export default authReducers