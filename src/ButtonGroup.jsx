import React from 'react';

import { CounterContext } from './CounterContext';

import ButtonItem from './ButtonItem';

class ButtonGroup extends React.Component {
	render() {
		return (
			<CounterContext.Consumer>
				{(props) => (
					<div>
						<ButtonItem onAction={props.onDecrement}>-</ButtonItem>
						<ButtonItem onAction={props.onReset}>Reset</ButtonItem>
						<ButtonItem onAction={props.onIncrement}>+</ButtonItem>
					</div>
				)}
			</CounterContext.Consumer>
		);
	}
}

export default ButtonGroup;
