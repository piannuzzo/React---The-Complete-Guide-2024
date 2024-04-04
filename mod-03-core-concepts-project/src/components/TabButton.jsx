export default function TabButton({ children, selected, ...props }) {
	console.log('TabButton Component')
	return (
		<li>
			<button className={selected ? 'active' : ''} {...props}>
				{children}
			</button>
		</li>
	)
}