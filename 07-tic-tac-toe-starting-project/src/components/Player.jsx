import { useState } from "react"

export default function Player({ initialName, symbol, isActive }) {
	const [ playerName, setPlayerName ] = useState(initialName)
	const [ isEditing, setIsEditing ] = useState(false)

	function handleEditButtonClick() {
		setIsEditing(editing => !editing)
	}

	function handlePlayerNameChange(event) {
		console.log(event)
		setPlayerName(event.target.value)
	}

	return (
		<li className={isActive ? 'active' : ''}>
			<span className="player">
				{ isEditing
					? <input
						onChange={handlePlayerNameChange}
						required
						type="text"
						value={playerName}
					/>
					: <span className='player-name'>{playerName}</span>
				}
				<span className='player-symbol'>{symbol}</span>
			</span>
			<button onClick={handleEditButtonClick}>
				{ isEditing ? "Save" : "Edit" }
			</button>
		</li>
	)
}