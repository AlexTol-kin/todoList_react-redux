import { FieldSearch } from './components';
import styles from './search-todo.module.css';
import { useSearchTodoList } from '../../hooks';
import { useSelector } from 'react-redux';
import { selectTodos } from '../../selectors';
import { useState } from 'react';

export const SearchTodo = () => {
	const newTodoList = useSelector(selectTodos);
	const [fieldSearch, setFieldSearch] = useState('');

	const { searchFlag, onSearchTodoList, fieidTodo } = useSearchTodoList(
		newTodoList,
		fieldSearch,
		setFieldSearch,
	);

	return (
		<div className={styles.buttonDivSearch}>
			<button onClick={onSearchTodoList}> 🔎</button>
			<FieldSearch fieldSearch={fieldSearch} setFieldSearch={setFieldSearch} />
			{!searchFlag ? <></> : <li>{fieidTodo}</li>}
		</div>
	);
};
