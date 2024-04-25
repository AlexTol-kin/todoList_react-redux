export const updateTodoState = 'Редактировать';

export const updateTodoReduser = (state = updateTodoState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'UPDATE_TODO': {
			return payload;
		}

		case 'NEW_UPDATE_TODO': {
			return (state = payload);
		}

		default:
			return state;
	}
};
