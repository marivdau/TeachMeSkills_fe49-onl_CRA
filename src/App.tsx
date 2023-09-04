import './App.css';
import { ConfirmRegistration } from './pages/confirm-registration';
import { SelectedPost } from './pages/selected-form';
import { SignIn } from './pages/sign-in';
import { SignUp } from './pages/sign-up';
import { Success } from './pages/success';

function App() {
  return (
    <div className="App">
      <SelectedPost />
    </div>
  );
}

export default App;
