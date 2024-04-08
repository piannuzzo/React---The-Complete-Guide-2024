import { useState } from "react";
import UserInput from "./UserInput";

export default function UserInputs({ onChange, userInputs }) {
	const errors = Object.keys(userInputs).reduce((obj, key) => ({...obj, [key]: ''}), {})
	const errorKeys = Object.keys(errors)
	delete errorKeys.duration

	errorKeys.forEach(key => {
		if (Number.isNaN(parseFloat(userInputs[key], 10)) || userInputs[key] < 0) {
			errors[key] = 'Value must be a positive number.'
		}
	})
	if (Number.isNaN(parseInt(userInputs.duration, 10))) {
		errors.duration = 'Value must be a positive integer.'
	}

	return (
		<div id="user-input">
			<div className="user-input-grid">
				<UserInput
					errorMessage={errors.initialInvestment}
					label="Initial Investment"
					onChange={value => { onChange('initialInvestment', value) }}
					value={userInputs.initialInvestment}
				/>
				<UserInput
					errorMessage={errors.annualInvestment}
					label="Annual Investment"
					onChange={value => { onChange('annualInvestment', value) }}
					value={userInputs.annualInvestment}
				/>
				<UserInput
					errorMessage={errors.expectedReturn}
					label="Expected Return"
					onChange={value => { onChange('expectedReturn', value) }}
					value={userInputs.expectedReturn}
				/>
				<UserInput
					errorMessage={errors.duration}
					label="Duration"
					onChange={value => { onChange('duration', value) }}
					value={userInputs.duration}
				/>
			</div>
		</div>
	)
}