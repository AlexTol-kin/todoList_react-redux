import styles from './app.module.css';
import { FieldAddTodo, ListTodos, SearchTodo, TodosFilter } from './components';

export const App = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.headingTitle}>To-Do List</h1>
			<form className={styles.form}>
				<FieldAddTodo />
				<ListTodos />
				<TodosFilter />
				<SearchTodo />
			</form>
		</div>
	);
};
