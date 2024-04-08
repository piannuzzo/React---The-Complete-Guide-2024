export default function UserInput({ errorMessage, label, onChange, value }) {
	return (
		<div className="user-input">
			<label>{label}</label>
			<input
				type="number"
				onChange={ev => onChange(ev.target.value)}
				value={value}
			/>
			{
				errorMessage !== '' && <label className="error">{errorMessage}</label>
			}
		</div>
	)
}