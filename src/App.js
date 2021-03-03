import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import { PostsContextProvider } from './context/PostsContext/postContext';
import AddPost from './components/AddPost';
import EditPost from './components/EditPost';
import Navbar from './components/UI/Navbar';

export default function App() {
  return (
    <Router>
      <PostsContextProvider>
        <Navbar />
        <Switch>
          <Route path="/add">
            <AddPost />
          </Route>
          <Route path="/edit/:postId">
            <EditPost />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </PostsContextProvider>
    </Router>
  );
}
