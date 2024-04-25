import { URL_TODOLIST } from '../constants';

export const useGetTodoListAsync = (dispatch) => {
	return fetch(URL_TODOLIST)
		.then((loadedData) => loadedData.json())
		.then((loadedTodoList) => {
			return dispatch({
				type: 'ALL_TODOS',
				payload: loadedTodoList,
			});
		});
};
