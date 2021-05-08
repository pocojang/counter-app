import { INCREMENT, DECREMENT, SET_DIFF, RESET } from './actions';

const initState = {
	count: 0,
	diff: 1,
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case INCREMENT:
			return {
				...state,
				count: state.count + state.diff,
			};
		case DECREMENT:
			return {
				...state,
				count: state.count - state.diff,
			};
		case SET_DIFF:
			return {
				...state,
				diff: action.diff,
			};
		case RESET:
			return {
				...state,
				count: initState.count,
			};
		default:
			return state;
	}
};

export default reducer;
