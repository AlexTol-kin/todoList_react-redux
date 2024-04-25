import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styles from './text-field.module.css';
import { selectFieldAddTodo } from '../../../../selectors';
import { fieldAdd } from '../../../../actions';

export const TextField = () => {
	const dispatch = useDispatch();

	const messageTodo = useSelector(selectFieldAddTodo);

	const onFieldAddTodo = ({ target }) => {
		dispatch(fieldAdd(target.value));
	};

	return (
		<input
			className={styles.formInput}
			type="text"
			placeholder="Опишите задачу"
			value={messageTodo || ''}
			onChange={onFieldAddTodo}
		/>
	);
};
