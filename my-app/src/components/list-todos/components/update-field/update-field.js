import { useDispatch, useSelector } from 'react-redux';
import { selectUpdateTodo } from '../../../../selectors';
import styles from './update-field.module.css';
import { newUpdateTodo } from '../../../../actions';

export const UpdateField = () => {
	const dispatch = useDispatch();

	const updateTodo = useSelector(selectUpdateTodo);

	const onUpdateTodo = ({ target }) => {
		dispatch(newUpdateTodo(target.value));
	};

	return (
		<input
			className={styles.formInput}
			type="text"
			onChange={onUpdateTodo}
			value={updateTodo || ''}
			autoFocus
		/>
	);
};
