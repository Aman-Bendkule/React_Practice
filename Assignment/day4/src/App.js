import './App.css';
import CounterButton from './components/CounterButton';
import DragAndDrop from './components/DragAndDrop';
import FormComponent from './components/Form';
import InputFieldLogger from './components/InputFieldLogger';
import ToggleVisibility from './components/ToggleVisibility ';

function App() {
  return (
    <>
    <div>
      <CounterButton/>
    </div>
    <div>
      <ToggleVisibility/>
    </div>
    <div>
      <InputFieldLogger/>
    </div>
    <div>
      <DragAndDrop/>
    </div>
    <div>
      <FormComponent/>
    </div>
    </>
  );
}

export default App;
