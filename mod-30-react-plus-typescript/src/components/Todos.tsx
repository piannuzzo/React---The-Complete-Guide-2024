import React, {useContext} from "react"

import TodoItem from './TodoItem'
import { TodosContext } from "../store/todos-context"
import classes from './Todos.module.css'

const Todos: React.FC = () => {
	const todosContext = useContext(TodosContext)

	return <ul className={classes.todos}>
		{todosContext.todos.map(todo => (
			<TodoItem
				key={todo.id}
				onClick={todosContext.removeTodo.bind(null, todo.id)}
				todo={todo} />
		))}
	</ul>
}

export default Todos