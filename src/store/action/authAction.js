export const signIn = (credentials) => {
	return (dispatch, getState, { getFirebase }) => {
		const fire = getFirebase();

		fire
			.auth()
			.signInWithEmailAndPassword(credentials.email, credentials.password)
			.then(() => {
				dispatch({ type: 'LOGIN_SUCESS' });
			})
			.catch((err) => {
				dispatch({ type: 'LOGIN_FAILED', err }); //change "FAILED to ERROR"
			});
	};
};
export const signOut = () => {
	return (dispatch, getState, { getFirebase }) => {
		const fire = getFirebase();
		fire.auth().signOut().then(() => {
			dispatch({ type: 'SIGNOUT_SUCCESS' });
		});
	};
};
export const signUp = (newUser) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const fire = getFirebase();
		const firestore = getFirestore();
		fire
			.auth()
			.createUserWithEmailAndPassword(newUser.email, newUser.password)
			.then((response) => {
				return firestore
					.collection('users')
					.doc(response.user.uid)
					.set({
						firstName: newUser.firstName,
						lastName: newUser.lastName,
						initials: newUser.firstName[0] + newUser.lastName[0]
					});
			})
			.then(() => {
				dispatch({ type: 'SIGNUP_SUCCESS' });
			})
			.catch((err) => {
				dispatch({ type: 'SIGNUP_FAILED', err });
			});
	};
};
