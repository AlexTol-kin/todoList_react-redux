export const initialProductsState = '';

export const fieldAddTodoReduser = (state = initialProductsState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'FIELD_ADD': {
			return (state = payload);
		}

		default:
			return state;
	}
};
