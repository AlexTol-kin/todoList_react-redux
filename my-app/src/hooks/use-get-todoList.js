import { useEffect, useState } from 'react';
import { URL_TODOLIST } from '../constants';

export const useGetTodoList = (refresTodoFlag) => {
	const [newTodoList, setTodoLis] = useState([]);
	const [isloading, setIsloading] = useState(true);

	useEffect(() => {
		setIsloading(true);

		fetch(URL_TODOLIST)
			.then((loadedData) => loadedData.json())
			.then((loadedTodoList) => {
				setTodoLis(loadedTodoList);
				console.log(loadedTodoList);
			})
			.finally(() => setIsloading(false));
	}, [refresTodoFlag]);

	return {
		newTodoList,
		isloading,
	};
};
