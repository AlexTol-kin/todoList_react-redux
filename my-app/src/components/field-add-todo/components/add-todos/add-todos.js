import { useSelector } from 'react-redux';
import { selectFieldAddTodo } from '../../../../selectors';
import { useAddTodoList } from '../../../../hooks/use-add-todoList';

export const AddTodos = () => {
	const messageTodo = useSelector(selectFieldAddTodo);

	const { onClickAddTodoList } = useAddTodoList(messageTodo);

	return (
		<button
			disabled={messageTodo === '' || messageTodo === undefined}
			onClick={onClickAddTodoList}
		>
			Добавить задачу
		</button>
	);
};
