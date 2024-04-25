import { URL_TODOLIST } from '../constants';

export const useDeleteTodoList = () => {
	const onDeleteTodo = (e, id) => {
		console.log(id);
		fetch(`${URL_TODOLIST}/${id}`, {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Задача удалена', response);
			});
	};

	return { onDeleteTodo };
};
