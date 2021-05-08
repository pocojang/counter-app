import { useState, createContext } from 'react';

const CounterContext = createContext();

function CounterContextProvider({ children }) {
	const [count, setCount] = useState(0);
	const [diff, setDiff] = useState(0);

	const onIncrement = () => setCount((prevCount) => prevCount + (diff || 1));
	const onDecrement = () => setCount((prevCount) => prevCount - (diff || 1));
	const onReset = () => setCount(0);

	const handleDiff = ({ target }) => setDiff(target.valueAsNumber);

	return (
		<CounterContext.Provider
			value={{
				count,
				diff,
				setCount,
				setDiff,
				handleDiff,
				onDecrement,
				onReset,
				onIncrement,
			}}
		>
			{children}
		</CounterContext.Provider>
	);
}

export { CounterContext, CounterContextProvider };
