import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);
	function setCountMe() {
		setCount(count + 1);
	}
	return (
		<div>
			<p>
				<button type="button" onClick={setCountMe}>
					count is:{count}
				</button>
			</p>
		</div>
	);
}

export default App;
