import React from 'react';
import { CounterContext } from './CounterContext';
class InputRange extends React.Component {
	render() {
		return (
			<CounterContext.Consumer>
				{(props) => (
					<input
						type="range"
						max={10}
						onChange={props.handleDiff}
						defaultValue={props.diff}
					/>
				)}
			</CounterContext.Consumer>
		);
	}
}

export default InputRange;
