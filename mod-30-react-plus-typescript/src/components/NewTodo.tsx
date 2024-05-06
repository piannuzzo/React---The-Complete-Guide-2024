import { useRef, useContext } from "react"

import { TodosContext } from "../store/todos-context"
import classes from './NewTodo.module.css'

const NewTodo: React.FC = () => {
	const todosContext = useContext(TodosContext)

	const todoTextInputRef = useRef<HTMLInputElement>(null)

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault()
		const todoText = todoTextInputRef.current?.value ?? ""

		if (todoText?.trim().length === 0) {
			return
		}
		todosContext.addTodo(todoText)
	}

	return <form className={classes.form} onSubmit={submitHandler}>
		<label htmlFor="text">Todo text</label>
		<input type="text" id="text" ref={todoTextInputRef} />
		<button onClick={submitHandler}>Create Todo</button>
	</form>
}

export default NewTodo