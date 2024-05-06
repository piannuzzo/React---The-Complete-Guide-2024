class Todo {
	id: string
	text: string

	constructor(todoText: string) {
		this.id = `id:${Math.random()}`
		this.text = todoText
	}
}

export default Todo