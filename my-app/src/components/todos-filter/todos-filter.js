import { useSelector } from 'react-redux';
import { useFilterTodoList } from '../../hooks';
import styles from './todos-filter.module.css';
import { selectTodos } from '../../selectors';

export const TodosFilter = () => {
	const newTodoList = useSelector(selectTodos);

	const { onFilterTodo } = useFilterTodoList(newTodoList);

	return (
		<div className={styles.buttonDivFilter}>
			<button className={styles.buttonFilter} onClick={onFilterTodo}>
				фильтр А-Я
			</button>
		</div>
	);
};
