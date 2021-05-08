import './App.css';
import { useState } from 'react';

import ButtonGroup from './ButtonGroup';
import ShowCount from './ShowCount';
import InputRange from './InputRange';

function App() {
	const [count, setCount] = useState(0);
	const [diff, setDiff] = useState(0);

	const onIncrement = () => setCount((prevCount) => prevCount + (diff || 1));
	const onDecrement = () => setCount((prevCount) => prevCount - (diff || 1));
	const onReset = () => setCount(0);

	const handleDiff = ({ target }) => setDiff(target.valueAsNumber);

	return (
		<div className="App">
			<main className="App-main">
				<ShowCount count={count} diff={diff} />
				<InputRange handleDiff={handleDiff} diff={diff} />
				<ButtonGroup onDecrement={onDecrement} onReset={onReset} onIncrement={onIncrement} />
			</main>
		</div>
	);
}

export default App;
