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
import { Success } from './pages/success';
import { AuthorizedContext } from './AuthorizedContext';
import { Link, Route, Routes } from 'react-router-dom';
import { AllListPosts } from './pages/all-posts';
import { Header } from '#features/header/header';
import { ActivatePage } from './pages/activate';
import { AddPost } from './pages/add-post';

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
      {/* <ThemeSwitcher /> */}
      <Header />
      <Routes>
        <Route index element={<Link to="/sign-up">Go to Sign up</Link>} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route
          path="/sign-up/confirm-registration"
          element={<ConfirmRegistration />}
        />
        <Route path="/sign-up/success" element={<Success />} />
        <Route path="/posts" element={<ListOfPosts />}></Route>
        <Route path="/posts/:postId" element={<SelectedPost />}></Route>
        {/* <Route path="/posts/all" element={<AllListPosts />}></Route> */}
        <Route
          path="/posts/search-result"
          element={<SearchResults cards={postCardsListMockArray} />}
        ></Route>
        <Route path="/activate/:uid/:token" element={<ActivatePage />} />
        <Route path='/posts/add-post' element={<AddPost />} />
      </Routes>
    </div>
  );
}

export default Root;
