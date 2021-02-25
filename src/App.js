import React from 'react';
import Home from './Home';
import { PostsContextProvider } from './context/PostsContext/postContext';

const App = () => {
  return (
    <PostsContextProvider>
      <Home />
    </PostsContextProvider>
  );
};

export default App;
