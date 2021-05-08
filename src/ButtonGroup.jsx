import { useContext } from 'react';

import { CounterContext } from './CounterContext';

import ButtonItem from './ButtonItem';

function ButtonGroup() {
	const { onDecrement, onReset, onIncrement } = useContext(CounterContext);

	return (
		<div>
			<ButtonItem onAction={onDecrement}>-</ButtonItem>
			<ButtonItem onAction={onReset}>Reset</ButtonItem>
			<ButtonItem onAction={onIncrement}>+</ButtonItem>
		</div>
	);
}

export default ButtonGroup;
