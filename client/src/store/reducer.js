const reducer =  (state, action) => {
	switch (action.type) {
		case 'TOGGLE_NAVBAR': 
			return {
				...state,
				navOpen: action.show
			}

		default: return { ...state }
	}
};

export default reducer;