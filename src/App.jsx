import { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	const date = new Date();
	date.setDate(date.getDate() + count);
	const destinedDate = date.toLocaleString().split(",")[0];

	function addDay() {
		setCount((s) => s + 1);
	}
	function substracteDay() {
		setCount((s) => s - 1);
	}
	function reset() {
		setCount(0);
	}

	return (
		<>
			<h1>{destinedDate}</h1>
			<h2>{count === 0 ? " It's today 😎 " : count >= 1 ? `It is ${count} days from today` : `It was ${Math.abs(count)} days ago`}</h2>
			<div className="content">
				<button onClick={substracteDay}>Remove days</button>
				<button onClick={reset}>Reset</button>
				<button onClick={addDay}>Add days</button>
			</div>
		</>
	);
}

export default App;
