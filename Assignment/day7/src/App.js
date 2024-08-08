import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import SearchFilter from './components/SearchFilter ';
import SettingsForm from './components/SettingsForm';
import Survey from './components/Survey';

function App() {
  return (
    <fragment>
      <div>
      <h1>Login</h1>
      <Login/>
      </div>
      <div>
        <h1>Register</h1>
        <Register/>
      </div>
      <div>
      <h1>Survey</h1>
      <Survey />
    </div>
    <div>
      <h1>Search Filter</h1>
      <SearchFilter />
    </div>
    <div>
      <h1>Settings</h1>
      <SettingsForm />
    </div>


    </fragment>

  );
}

export default App;
