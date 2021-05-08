import ButtonItem from './ButtonItem';

function ButtonGroup({ onDecrement, onReset, onIncrement }) {
	return (
		<div>
			<ButtonItem onAction={onDecrement}>-</ButtonItem>
			<ButtonItem onAction={onReset}>Reset</ButtonItem>
			<ButtonItem onAction={onIncrement}>+</ButtonItem>
		</div>
	);
}

export default ButtonGroup;
