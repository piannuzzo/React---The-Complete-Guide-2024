import { useState } from "react"

import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from "./winning-combinations.js"
import GameOver from "./components/GameOver.jsx"

const PLAYERS = {
	'X': 'Player 1',
	'O': 'Player 2'
}

const INITIAL_GAME_BOARD = [
	Array(3).fill(null),
	Array(3).fill(null),
	Array(3).fill(null),
]

const determineActivePlayer = (gameTurns) =>
	gameTurns?.[0]?.player === "X" ? "O" : "X"

const generateGameBoard = gameTurns => {
	let gameBoard = [...INITIAL_GAME_BOARD].map(arr => [...arr])

	gameTurns.forEach((turn) => {
		const { square, player } = turn
		gameBoard[square.row][square.col] = player
	})

	return gameBoard
}

const determineWinner = (gameBoard, players) => {
	let winner = ''

	for (const comb of WINNING_COMBINATIONS) {
		const cell1 = gameBoard[comb[0].row][comb[0].column]
		const cell2 = gameBoard[comb[1].row][comb[1].column]
		const cell3 = gameBoard[comb[2].row][comb[2].column]

		if (cell1 !== null && cell1 === cell2 && cell1 === cell3) { 
			winner = players[cell1]
			break
		}
	}

	return winner
}

function App() {
	const [players, setPlayers] = useState({ ...PLAYERS })
	const [gameTurns, setGameTurns] = useState([])
	const activePlayer = determineActivePlayer(gameTurns)
	const gameBoard = generateGameBoard(gameTurns)
	const winner = determineWinner(gameBoard, players)
	const hasDraw = gameTurns.length === INITIAL_GAME_BOARD.flat(Infinity).length && winner === ''

	function handleSelectSquare(rowIndex, colIndex) {
		setGameTurns((prevGameTurns) => {
			let currentPlayer = determineActivePlayer(prevGameTurns)

			const gameTurnsCopy = [
				{ square: { row: rowIndex, col: colIndex }, player: currentPlayer },
				...prevGameTurns,
			]

			return gameTurnsCopy
		})
	}

	function restartGame() { setGameTurns([]) }

	function handlePlayerNameChange(symbol, newName) { 
		setPlayers(prevPlayers => (
			{...prevPlayers, [symbol]: newName}
		))
	}

	return (
		<main>
			<div id="game-container">
				<ol id="players" className="highlight-player">
					<Player
						initialName={PLAYERS.X}
						symbol="X"
						isActive={activePlayer === "X"}
						onChangeName={handlePlayerNameChange}
					/>
					<Player
						initialName={PLAYERS.O}
						symbol="O"
						isActive={activePlayer === "O"}
						onChangeName={handlePlayerNameChange}
					/>
				</ol>
				{
					(winner !== '' || hasDraw)
					&&
					<GameOver
						onRestart={restartGame}
						winner={winner}
					/>
				}
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
