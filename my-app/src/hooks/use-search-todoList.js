import { useState } from 'react';

export const useSearchTodoList = (newTodoList, fieldSearch, setFieldSearch) => {
	const [searchFlag, setSearchFlag] = useState(false);
	const [fieidTodo, setFieldTodo] = useState([]);

	const onSearchTodoList = (e) => {
		e.preventDefault();
		if (fieldSearch === '') {
			setSearchFlag(false);
		} else {
			setSearchFlag(true);
			let todoSearch = newTodoList.find((arr) =>
				arr.todo.toLowerCase().includes(fieldSearch.toLowerCase()),
			);
			setFieldSearch('');
			todoSearch !== undefined
				? setFieldTodo(todoSearch.todo)
				: setSearchFlag(false);
		}
	};

	return { searchFlag, onSearchTodoList, fieidTodo };
};
