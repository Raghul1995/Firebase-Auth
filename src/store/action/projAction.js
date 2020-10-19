export const createProj = (project) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firestore = getFirestore();
		const profile = getState().firebase.profile //gets the profile object from the state
		const authorId = getState().firebase.auth.uid // gives the author id
		
		firestore
			.collection('proj')
			.add({
				...project,

				authorFirstName: profile.firstName,
				authorLastName: profile.lastName,
				authorID: authorId,
				createdAt: new Date()
			})
			.then(() => {
				dispatch({ type: 'CREATE_PROJECT', project });
			}).catch((err)=>{
                dispatch({ type: 'CREATE_PROJECT_ERROR', err })
            })
	};
};
