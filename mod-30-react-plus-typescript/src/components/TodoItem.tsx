import Todo from '../models/todo'
import classes from './TodoItem.module.css'

const TodoItem: React.FC<{ onClick: () => void, todo: Todo }> = (props) => {
	return (
		<li
			className={classes.item}
			onClick={props.onClick}>
			{props.todo.text}
		</li>
	)
}

export default TodoItem