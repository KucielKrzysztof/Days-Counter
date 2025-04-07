import { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	const [inputVal, setInputVal] = useState("");
	const date = new Date();
	date.setDate(date.getDate() + count);
	const destinedDate = date.toLocaleString().split(",")[0];

	function addDay() {
		setCount((s) => (inputVal !== "" ? s + inputVal : s + 1));
	}
	function substracteDay() {
		setCount((s) => (inputVal !== "" ? s - inputVal : s - 1));
	}
	function reset() {
		setCount(0);
		setInputVal("");
	}

	return (
		<>
			<h1>{destinedDate}</h1>
			<h2>{count === 0 ? " It's today 😎 " : count >= 1 ? `It is ${count} days from today` : `It was ${Math.abs(count)} days ago`}</h2>
			<div className="content">
				<button onClick={substracteDay}>Remove days</button>
				<button onClick={reset} style={count === 0 ? { backgroundColor: "#292828", color: "#999999" } : null}>
					Reset
				</button>
				<button onClick={addDay}>Add days</button>
				<input type="number" value={inputVal} onChange={inputVal !== 0 ? (e) => setInputVal(Number(e.target.value)) : setInputVal("")} />
			</div>
		</>
	);
}

export default App;
