import styles from './update-todo.module.css';

export const OnUpdateTodo = ({ id, onRequestUpdateTodoList }) => {
	return (
		<button className={styles.button} onClick={(e) => onRequestUpdateTodoList(e, id)}>
			✎...
		</button>
	);
};
