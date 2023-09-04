import './App.css';
import { ConfirmRegistration } from './pages/confirm-registration';
import { ListOfPosts } from './pages/list-of-posts';
import { SelectedPost } from './pages/selected-post';
import { SignIn } from './pages/sign-in';
import { SignUp } from './pages/sign-up';
import { Success } from './pages/success';

function App() {
  return (
    <div className="App">
      <ListOfPosts />
    </div>
  );
}

export default App;
