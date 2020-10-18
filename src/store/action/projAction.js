export const createProj = (project) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firestore = getFirestore();
		firestore
			.collection('proj')
			.add({
				...project,

				authorFirstName: 'Bruce',
				authorLastName: 'Ashura',
				authorID: 12345,
				createdAt: new Date()
			})
			.then(() => {
				dispatch({ type: 'CREATE_PROJECT', project });
			}).catch((err)=>{
                dispatch({ type: 'CREATE_PROJECT_ERROR', err })
            })
	};
};
