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
                authError : null
            }
            case "SIGNOUT_SUCCESS":
                console.log("signOut success")
            return state
            case "SIGNUP_SUCCESS":
                console.log("signUp success")

                return {
                    ...state,
                    authError : null
                }
                case "SIGNUP_FAILED":
                return {
                    ...state,
                    authError : action.err.message
                }
            default: 
            return  state;
    }

}
export default authReducers