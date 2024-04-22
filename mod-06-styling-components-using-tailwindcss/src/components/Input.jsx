export default function Input({ invalid, label, ...props }) {
	let labelClasses = "block mb-2 text-xs font-bold tracking-wide uppercase"
	let inputClasses = "w-full px-3 py-2 leading-tight border rounded shadow"

	labelClasses += invalid ? " text-red-400" : " text-stone-300"
	inputClasses += invalid ? " text-red-500 bg-red-100 border-red-300" : " text-gray-700 bg-stone-300"

	return <p>
		<label className={labelClasses}>{label}</label>
		<input className={inputClasses} {...props} />
	</p>
}
