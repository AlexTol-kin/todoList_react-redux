import { URL_TODOLIST } from '../constants';

export const useAddTodoList = (messageTodo) => {
	const onClickAddTodoList = (event) => {
		fetch(URL_TODOLIST, {
			method: 'Post',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				todo: messageTodo,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Задача добавлена', response);
			});
	};

	return {
		onClickAddTodoList,
	};
};
