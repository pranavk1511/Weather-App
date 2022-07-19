import Search from './search/search';
import './App.css';

function App() {

  const handleOnSearchChange = (searchData) =>
  {
      console.log("Namaste ! ")
  }
  return (
    <div className="container">
     <Search onSeacrhChange={handleOnSearchChange}/>
    </div>
  );
}

export default App;
