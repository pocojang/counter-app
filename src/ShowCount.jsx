import React from 'react';
import { CounterContext } from './CounterContext';

class ShowCount extends React.Component {
	render() {
		return (
			<CounterContext.Consumer>
				{(props) => (
					<h1>
						{props.count} {'&'} {props.diff}
					</h1>
				)}
			</CounterContext.Consumer>
		);
	}
}
export default ShowCount;
