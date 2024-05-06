import React, { useState } from "react"

import Todo from "../models/todo"

type TodosContextObj = {
	todos: Todo[],
	addTodo: (todoText: string) => void,
	removeTodo: (todoId: string) => void,
}

export const TodosContext = React.createContext<TodosContextObj>({
	todos: [],
	addTodo: () => {},
	removeTodo: () => {}
})

const TodosContextProvider: React.FC = (props) => {
	const [todos, setTodos] = useState<Todo[]>([])

	const addTodoHandler = (todoText: string) => {
		setTodos(todosPrev => (
			[...todosPrev, new Todo(todoText)]
		))
	}

	const removeTodoHandler = (todoId: string) => {
		const itemIndex = todos.findIndex(todo => todo.id === todoId)
		setTodos(todosPrev => {
			const newTodos = [...todosPrev]
			newTodos.splice(itemIndex, 1)
			return newTodos
		})
	}

	const contextValue: TodosContextObj = {
		todos,
		addTodo: addTodoHandler,
		removeTodo: removeTodoHandler
	}

	return <TodosContext.Provider value={contextValue}>
		{props.children}
	</TodosContext.Provider>
}

export default TodosContextProvider