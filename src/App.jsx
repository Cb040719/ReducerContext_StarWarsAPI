import Provider from "./app/context";
import Card from "./components/Card";

function App() {
	return (
		<div className="App p-5 ">
			<Provider>
				<Card />
			</Provider>
		</div>
	);
}

export default App;
