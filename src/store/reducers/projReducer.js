const initState = {
	elements: [
		{ id: 1, title: 'fish', content: 'blue beh blah' },
		{ id: 2, title: 'fisnappingh', content: 'blue beh blah' },
		{ id: 3, title: 'bootknitting', content: 'blue beh blah' }
	]
};

const projReducer = (state = initState, action) => {
	switch(action.type){
		case"CREATE_PROJECT" :
		console.log("created project", action.project)
		return state
		case"CREATE_PROJECT_ERROR" :
		console.log("created project", action.error)
		return state
default:
return state;

	}
};
export default projReducer;
