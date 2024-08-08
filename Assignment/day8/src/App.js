import './App.css';
import Quiz from './components/Quiz';
import RecipeApp from './components/RecipeApp';
import ShoppingCart from './components/ShoppingCart ';
// import ReactDOM from 'react-dom';
import TemperatureConverter from './components/TemperatureConverter';
import TodoList from './components/TodoList';


function App() {
  
  return (
    <fagment>
      <div>
        <h1>Tempature Converter</h1>
        <TemperatureConverter/>
      </div>
      <div>
        <h1>ToDo List </h1>
        <TodoList/>
      </div>
      <div>
        <h1>ShoppingCart</h1>
        <ShoppingCart/>
      </div>
      <div>
        <h1>Quiz</h1>
        <Quiz/>
      </div>
      <div>
        <h1>Recipe App</h1>
        <RecipeApp/>
      </div>
    </fagment>  
  );
}

export default App;