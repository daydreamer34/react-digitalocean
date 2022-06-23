
import './App.css';
import data from './data/data.js';
import AnimalCard from './components/Animals/AnimalCard';

const showAdditional = (additional = '') => {
	const alertInfo = Object.entries(additional)
		.map((information) => `${information[0]}: ${information[1]}`)
		.join(' ');
	alert(alertInfo);
};
function App() {
	console.log(data);
	return (
		<div className="App">
			<h1>Animals</h1>
			{data.map((animal) => (
				<AnimalCard
					key={animal.name}
					{...animal}
					showAdditional={showAdditional}
				/>
			))}
		</div>
	);
}

export default App;
