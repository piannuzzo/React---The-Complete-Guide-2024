import { useState } from 'react';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';
import TabButton from './TabButton.jsx';
import { EXAMPLES } from '../data.js';

export default function Examples() {
	const [ state, setState ] = useState({ selectedTab: '' })
	let tabContent = <p>Select a tab</p>

	if (state.selectedTab) {
		tabContent = 
			<div id='tab-content'>
				<h3>{EXAMPLES[state.selectedTab].title}</h3>
				<p>{EXAMPLES[state.selectedTab].description}</p>
				<pre>
					<code>
						{EXAMPLES[state.selectedTab].code}
					</code>
				</pre>
			</div>
	}

	function handleTabButtonClicked(selectedTab) {
		setState({ selectedTab })
		console.log(state.selectedTab)
	}

	function getTabButtons() {
		return (
			<>
			{Object.keys(EXAMPLES).map(key => (
				<TabButton
					key={key}
					onClick={() => handleTabButtonClicked(key)}
					selected={state.selectedTab === key}
				>
					{EXAMPLES[key].title}
				</TabButton>
			))}
			</>
		)
	}

	return (
		<Section id="examples" title="Examples">
			<Tabs
				buttons={getTabButtons()}
			>
				{tabContent}
			</Tabs>
		</Section>
	)
}