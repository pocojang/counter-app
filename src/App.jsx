import './App.css';

import { increment, decrement, setDiff, reset } from './actions';

import ButtonGroup from './ButtonGroup';
import ShowCount from './ShowCount';
import InputRange from './InputRange';

function App({ store }) {
	const { count, diff } = store.getState();

	const onIncrement = () => store.dispatch(increment());
	const onDecrement = () => store.dispatch(decrement());
	const onReset = () => store.dispatch(reset());

	const handleDiff = ({ target }) => store.dispatch(setDiff(target.valueAsNumber));

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
