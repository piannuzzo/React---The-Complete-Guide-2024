import { useState } from 'react'

export default function GameBoard({ onSelectSquare, boardMatrix }) {
	return (
		<ol id='game-board'>
			{
				boardMatrix.map((row, rowIndex) => (
					<li key={rowIndex}>
						<ol>
							{
								row.map((playerSymbol, colIndex) => (
									<li key={colIndex}>
										<button
											disabled={playerSymbol ?? ''}
											onClick={() => onSelectSquare(rowIndex, colIndex)}
										>
											{playerSymbol}
										</button>
									</li>
								))
							}
						</ol>
					</li>
				))
			}
		</ol>
	)
}