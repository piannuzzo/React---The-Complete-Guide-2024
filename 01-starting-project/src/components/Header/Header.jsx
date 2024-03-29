import reactCoreConceptsImage from '../../assets/react-core-concepts.png'
import './Header.css'

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
	return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
return (
	<header>
		<img src={reactCoreConceptsImage} alt="Stylized atom" />
		<h1>
			<div>React Essentials</div>
			<div className='sub-header'>Components, JSX, Props, State & More...</div>
			</h1>
		<p>
			{reactDescriptions[genRandomInt(2)]} Fundamental React concepts
			you will need for almost any app you are going to build!!!
		</p>
	</header>
	)
}