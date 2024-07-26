import './App.css';
import Counter from './components/Counter';
import DataFetcher from './components/DataFetcher';
import FormWithState from './components/FormWithState';
import Timer from './components/Timer';
import ToggleSwitch from './components/ToggleSwitch';

function App() {
  return (
    <div className="App">

      <div>
       <h1 className="my-4">React Counter Example</h1>
       <Counter />
      </div>

      <div>
      <h1 className="my-4">React Timer Example</h1>
      <Timer />
      </div>

      <div>
      <h1 className="my-4">React Toggle Switch Example</h1>
      <ToggleSwitch />
      </div>

      <div>
      <h1 className="my-4">React Data Fetch Example</h1>
      <DataFetcher />
      </div>

      <div>
      <h1 className="my-4">React Form Example</h1>
      <FormWithState />
      </div>



    </div>
  );
}

export default App;
