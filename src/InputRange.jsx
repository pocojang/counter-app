function InputRange({ handleDiff, diff }) {
	return <input type="range" max={10} onChange={handleDiff} value={diff} />;
}

export default InputRange;
