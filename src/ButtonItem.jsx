function ButtonItem({ onAction, children }) {
	return <button onClick={onAction}>{children}</button>;
}

export default ButtonItem;
