export const initialFlags = {
	filterFlag: false,
	refresTodoFlag: false,
};

export const flagsReduser = (state = initialFlags, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'FILTER_FLAG': {
			return { ...state, filterFlag: !state.filterFlag };
		}

		case 'REFRESH_TODO_FLAG': {
			return { ...state, refresTodoFlag: !state.refresTodoFlag };
		}

		default:
			return state;
	}
};
