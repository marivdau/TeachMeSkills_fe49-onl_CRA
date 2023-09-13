import { ThemeSwitcher } from '#features/theme-switcher/theme-switcher';
import { useEffect, useState } from 'react';
import './App.css';
import { postCardsListMockArray } from './mock-data/mock-data-posts';
import { ConfirmRegistration } from './pages/confirm-registration';
import { ListOfPosts } from './pages/list-of-posts';
import { SearchResults } from './pages/search-results';
import { SelectedPost } from './pages/selected-post';
import { SignIn } from './pages/sign-in';
import { SignUp } from './pages/sign-up';
import { Success } from './pages/success-screen';
import { AuthorizedContext } from './AuthorizedContext';
import { Link, Route, Routes } from 'react-router-dom';

function Root() {
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => setIsAuthorized(true), 3000);
    return () => clearTimeout(timerId);
  });

  return (
    <div className="App">
      {/* <AuthorizedContext.Provider value={isAuthorized}>
        <SignUp />
      </AuthorizedContext.Provider> */}
      <ThemeSwitcher />
      <Routes>
        <Route index element={<Link to='/sign-up'>Go to Sign up</Link>} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/posts' element={<ListOfPosts />}></Route>
        <Route path='/posts/:postId' element={<SelectedPost />}></Route>
      </Routes>
      {/* <SearchResults cards={postCardsListMockArray}></SearchResults> */}
    </div>
  );
}

export default Root;
