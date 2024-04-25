import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OnRemoveTodo, OnUpdateTodo, UpdateField } from './components';
import {
	selectFilterFlag,
	selectRefresTodoFlag,
	selectTodos,
	selectUpdateTodo,
} from '../../selectors';
import { newUpdateTodo, useGetTodoListAsync, useRefresTodoFlag } from '../../actions';
import styles from './list-todos.module.css';
import { URL_TODOLIST } from '../../constants';
import { useFilterTodoList } from '../../hooks';

export const ListTodos = () => {
	const dispatch = useDispatch();

	const filterFlag = useSelector(selectFilterFlag);
	const refresTodoFlag = useSelector(selectRefresTodoFlag);
	const field = useSelector(selectTodos);
	const updateTodo = useSelector(selectUpdateTodo);
	const [newGetFetch, setNewGetFetch] = useState('');

	if (field[0] === undefined) {
		dispatch(useGetTodoListAsync);
	}

	const { fieldFilter } = useFilterTodoList();

	const onRequestUpdateTodoList = (event, id) => {
		dispatch(useRefresTodoFlag);
		if (!refresTodoFlag) {
			event.preventDefault();
			setNewGetFetch(`${URL_TODOLIST}/${id}`);
			fetch(`${URL_TODOLIST}/${id}`)
				.then((loadedData) => loadedData.json())
				.then((loadedTodoList) => {
					dispatch(newUpdateTodo(loadedTodoList.todo));
				});
		} else {
			fetch(newGetFetch, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json;charset=utf-8' },
				body: JSON.stringify({
					todo: updateTodo,
				}),
			})
				.then((rawResponse) => rawResponse.json())
				.then((response) => {
					console.log('Задача обновлена', response);
				});
		}
	};

	return (
		<>
			{refresTodoFlag ? <UpdateField /> : <div></div>}

			{(!filterFlag ? field : fieldFilter).map(({ id, todo }) => (
				<li key={id} className={styles.toDoList}>
					<OnUpdateTodo
						id={id}
						onRequestUpdateTodoList={onRequestUpdateTodoList}
					/>
					{todo}
					<OnRemoveTodo id={id} />
				</li>
			))}
		</>
	);
};
