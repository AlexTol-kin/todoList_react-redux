export const InitialTodoList = [];

export const todoListReduser = (state = InitialTodoList, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'ALL_TODOS': {
			return (state = payload);
		}

		case 'USE_ADD_TODO': {
			return { ...state, todo: payload };
		}

		case 'UPDATE_TODO': {
			return {
				...state,
				payload,
			};
		}

		case 'FILTER_TODO': {
			return state.sort(function (a, b) {
				if (a.todo.toLowerCase() < b.todo.toLowerCase()) {
					return -1;
				}
				if (a.todo.toLowerCase() > b.todo.toLowerCase()) {
					return 1;
				}
				return 0;
			});
		}

		default:
			return state;
	}
};
