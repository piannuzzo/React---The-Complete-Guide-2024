import { useState } from "react"
import Header from "./components/Header"
import UserInputs from "./components/UserInputs"
import AmmortizationTable from "./components/AmmortizationTable"

function App() {
	const [investmentValues, setInvestmentValues] = useState({
		initialInvestment: 100,
		annualInvestment: 0,
		expectedReturn: 5,
		duration: 10,
	})

	const handleUserInputsChange = (key, value) => {
		value = Number.isNaN(value) ? value : +value

		setInvestmentValues(prevValues => {
			return { ...prevValues, [key]: value }
		})
	}

	return (
		<div>
			<Header />
			<UserInputs
				onChange={handleUserInputsChange}
				userInputs={investmentValues}
			/>
			<AmmortizationTable investmentValues={investmentValues} />
		</div>
	)
}

export default App
