export default function UserInput({ errorMessage, label, onChange }) {
	return (
		<div>
			<label>{label}</label>
			<input type="text" onChange={ev => onChange(ev.target.value)} />
			{
				errorMessage !== '' && <label className="error">{errorMessage}</label>
			}
		</div>
	)
}