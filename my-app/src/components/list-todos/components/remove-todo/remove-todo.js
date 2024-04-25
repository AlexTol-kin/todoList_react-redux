import styles from './remove-todo.module.css';
import { useDeleteTodoList } from '../../../../hooks/use-delete-todoList';

export const OnRemoveTodo = ({ id }) => {
	const { onDeleteTodo } = useDeleteTodoList();

	return (
		<>
			<button className={styles.buttonDelete} onClick={(e) => onDeleteTodo(e, id)}>
				❌
			</button>
		</>
	);
};
