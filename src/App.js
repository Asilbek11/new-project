import './App.css';
const url = 'https://foodprint.p.rapidapi.com/api/foodprint';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e923516b47msh5f3da33d76e50d2p17dcd3jsne859c019ac9f',
		'X-RapidAPI-Host': 'foodprint.p.rapidapi.com'
	}
};
const response = await fetch(url, options);
	const result = await response.text();

function App() {
  return (
    <div className="App">
      APP
    </div>
  );
}

export default App;
