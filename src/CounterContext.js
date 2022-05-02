import { createContext, Component } from 'react';

const CounterContext = createContext();

class CounterContextProvider extends Component {
	state = {
		count: 0,
		diff: 0,
	};

	onIncrement = () => {
		this.setState((prevState) => ({
			...prevState,
			count: prevState.count + (prevState.diff || 1),
		}));
	};

	onDecrement = () => {
		this.setState((prevState) => ({
			...prevState,
			count: prevState.count - (prevState.diff || 1),
		}));
	};

	onReset = () => {
		this.setState({
			count: 0,
			diff: 0,
		});
	};

	handleDiff = ({ target }) => {
		this.setState((prevState) => ({
			...prevState,
			diff: target.valueAsNumber,
		}));
	};

	render() {
		const { children } = this.props;
		const { count, diff } = this.state;
		const { setCount, setDiff, handleDiff, onDecrement, onReset, onIncrement } =
			this;

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
}

export { CounterContext, CounterContextProvider };
