export const signIn = (credentials) => {
    return(dispatch, getState, {getFirebase})=>{
        const fire = getFirebase();

        fire.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
            
        ).then(()=>{
            dispatch({type: "LOGIN_SUCESS"})
        }).catch((err)=>{
            dispatch({type: "LOGIN_FAILED", err}) //change "FAILED to ERROR"
        })
    }

}
export const signOut = () =>{
    return(dispatch, getState, {getFirebase})=>{
        const fire = getFirebase();
        fire.auth().signOut().then(()=>{
            dispatch({type:"SIGNOUT_SUCCESS"})
        })

    }
}