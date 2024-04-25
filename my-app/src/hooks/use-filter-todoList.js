import { filterFieldTodo, isfilterFlag, useGetTodoListAsync } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterFlag, selectTodos } from '../selectors';

export const useFilterTodoList = () => {
	const dispatch = useDispatch();
	const fieldFilter = useSelector(selectTodos);
	const filterFlag = useSelector(selectFilterFlag);

	const onFilterTodo = (e) => {
		e.preventDefault();
		if (!filterFlag) {
			dispatch(isfilterFlag);
			dispatch(filterFieldTodo);
		} else {
			dispatch(useGetTodoListAsync);
			dispatch(isfilterFlag);
		}
	};

	return {
		onFilterTodo,
		fieldFilter,
	};
};
