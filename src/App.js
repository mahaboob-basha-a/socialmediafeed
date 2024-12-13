import React from 'react';
import SignIn from './components/SignIn';
import { Route, Routes } from 'react-router-dom';
import Feed from './components/Feed';
import PostForm from './components/PostForm';

function App() {
  return (
    <div className="App h[100vh] w-[100vw] flex justify-center items-start">
      <Routes>
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/new-post' element={<PostForm />} />
        <Route path='*' element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
