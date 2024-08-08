
import './App.css';
import FormWithValidation from './components/FormWithValidation';
import LoginLogoutToggle from './components/LoginLogoutToggle ';
import ProductAvailability from './components/ProductAvailability';
import ThemeSwitcher from './components/ThemeSwitcher';
import UserGreeting from './components/UserGreeting ';

function App() {
  return (
    <div >
      <div>
        <LoginLogoutToggle/>
      </div>
      <div>
        <UserGreeting/>
      </div>
      <div>
        <ProductAvailability/>
      </div>
      <div>
        <ThemeSwitcher/>
      </div>
      <div>
        <FormWithValidation/>
      </div>
    </div>
  );
}

export default App;
