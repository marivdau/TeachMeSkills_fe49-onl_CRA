import './App.css';
import { postCardsListMockArray } from './mock-data/mock-data-posts';
import { ConfirmRegistration } from './pages/confirm-registration';
import { ListOfPosts } from './pages/list-of-posts';
import { SearchResults } from './pages/search-results';
import { SelectedPost } from './pages/selected-post';
import { SignIn } from './pages/sign-in';
import { SignUp } from './pages/sign-up';
import { Success } from './pages/success-screen';

function App() {
  return (
    <div className="App">
      {/* <ListOfPosts cards={postCardsListMockArray}></ListOfPosts> */}
      <SearchResults cards={postCardsListMockArray}></SearchResults>
    </div>
  );
}

export default App;
