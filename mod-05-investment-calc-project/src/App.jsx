import { useState } from "react"
import Header from "./components/Header"
import UserInputs from "./components/UserInputs"
import AmmortizationTable from "./components/AmmortizationTable"

function App() {
	const [investmentValues, setInvestmentValues] = useState({
		initialInvestment: 0,
		annualInvestment: 0,
		expectedReturn: 0,
		duration: 0,
	})

	const handleUserInputsChange = userInputs => {
		const values = Object.keys(userInputs).map(key => userInputs[key])
		if (!validValues(values)) {
			return
		}

		setInvestmentValues(prevValues => {
			return { ...prevValues, ...userInputs }
		})
	}

	const validValues = (values) => {
		return values.filter(value => Number.isNaN(value) || value < 0).length === 0
	}

	return (
		<div>
			<Header />
			<UserInputs onChange={handleUserInputsChange} />
			<AmmortizationTable {...investmentValues} />
		</div>
	)
}

export default App
