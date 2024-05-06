export default function TabButton({ children, selected, ...props }) {
	return (
		<li>
			<button className={selected ? 'active' : ''} {...props}>
				{children}
			</button>
		</li>
	)
}