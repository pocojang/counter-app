import { useContext } from 'react';

import { CounterContext } from './CounterContext';

function InputRange() {
	const { handleDiff, diff } = useContext(CounterContext);

	return <input type="range" max={10} onChange={handleDiff} value={diff} />;
}

export default InputRange;
