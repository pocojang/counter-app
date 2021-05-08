import './App.css';

import ButtonGroup from './ButtonGroup';
import ShowCount from './ShowCount';
import InputRange from './InputRange';

import { CounterContextProvider } from './CounterContext.js';

function App() {
	return (
		<CounterContextProvider>
			<div className="App">
				<main className="App-main">
					<ShowCount />
					<InputRange />
					<ButtonGroup />
				</main>
			</div>
		</CounterContextProvider>
	);
}

export default App;
