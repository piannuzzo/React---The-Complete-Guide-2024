import { useEffect, useState } from "react";
import UserInput from "./UserInput";

export default function UserInputs({ onChange }) {
	const [values, setValues] = useState({
		initialInvestment: 0,
		annualInvestment: 0,
		expectedReturn: 0,
		duration: 0,
	})

	useEffect(() => {onChange(values)}, [values])

	const errors = Object.keys(values).reduce((obj, key) => ({...obj, [key]: ''}), {})

	const handleValueChange = (key, value) => {
		value = Number.isNaN(value) ? value : +value
		const newValues = { ...values, [key]: value }

		setValues(prevValues => {
			const newValues = { ...prevValues, [key]: value }
			return newValues
		})
	}

	const errorKeys = Object.keys(errors)
	delete errorKeys.duration

	errorKeys.forEach(key => {
		if (Number.isNaN(parseFloat(values[key], 10)) || values[key] < 0) {
			errors[key] = 'Value must be a positive number.'
		}
	})
	if (Number.isNaN(parseInt(values.duration, 10))) {
		errors.duration = 'Value must be a positive integer.'
	}

	return (
		<div id="user-input">
			<div className="user-input-grid">
				<UserInput
					errorMessage={errors.initialInvestment}
					label="Initial Investment"
					onChange={value => { handleValueChange('initialInvestment', value) }}
				/>
				<UserInput
					errorMessage={errors.annualInvestment}
					label="Annual Investment"
					onChange={value => { handleValueChange('annualInvestment', value) }}
				/>
				<UserInput
					errorMessage={errors.expectedReturn}
					label="Expected Return"
					onChange={value => { handleValueChange('expectedReturn', value) }}
				/>
				<UserInput
					errorMessage={errors.duration}
					label="Duration"
					onChange={value => { handleValueChange('duration', value) }}
				/>
			</div>
		</div>
	)
}