import { useState } from "react"

import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from "./winning-combinations.js"

const initialGameBoard = [
	Array(3).fill(null),
	Array(3).fill(null),
	Array(3).fill(null),
]

const determineActivePlayer = (gameTurns) => gameTurns?.[0]?.player === 'X' ? 'O' : 'X'

function App() {
	console.log('App')
	const [ gameTurns, setGameTurns ] = useState([])

	const activePlayer = determineActivePlayer(gameTurns)

	let gameBoard = initialGameBoard

	gameTurns.forEach(turn => {
		const { square, player } = turn
		gameBoard[square.row][square.col] = player
	})

	for (const combination of WINNING_COMBINATIONS) {
		
	}

	function handleSelectSquare(rowIndex, colIndex) {
		setGameTurns(prevGameTurns => {
			let currentPlayer = determineActivePlayer(prevGameTurns)

			const gameTurnsCopy = [
				{ square: { row: rowIndex, col: colIndex }, player: currentPlayer },
				...prevGameTurns
			]

			return gameTurnsCopy
		})
	}

	return (
		<main>
			<div id='game-container'>
				<ol id='players' className='highlight-player'>
					<Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
					<Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
				</ol>
				<GameBoard
					onSelectSquare={handleSelectSquare}
					boardMatrix={gameBoard}
				/>
			</div>
			<Log turns={gameTurns} />
		</main>
	)
}

export default App
