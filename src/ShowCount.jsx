import { useContext } from 'react';
import { CounterContext } from './CounterContext';

function ShowCount() {
	const { count, diff } = useContext(CounterContext);

	return (
		<h1>
			{count} {'&'} {diff}
		</h1>
	);
}

export default ShowCount;
