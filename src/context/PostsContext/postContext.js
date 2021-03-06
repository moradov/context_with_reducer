import React, { useReducer } from 'react';
import {
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  SET_ALERT,
  CLEAR_ALERT,
} from '../types';

import postReducer from './postReducer';
const PostsContext = React.createContext();

const PostsContextProvider = ({ children }) => {
  const initState = {
    posts: [
      { title: 'post1', body: 'content1', id: 'post1' },
      { title: 'post2', body: 'content2', id: 'post2' },
      { title: 'post3', body: 'content3', id: 'post3' },
    ],
    alert: null,
  };
  const [state, dispatch] = useReducer(postReducer, initState);

  const deletePost = (postId) => {
    dispatch({ type: DELETE_POST, payload: postId });
  };

  const addPost = (post) => {
    dispatch({ type: ADD_POST, payload: post });
  };
  const editPost = (EditedPost) => {
    dispatch({ type: EDIT_POST, payload: EditedPost });
  };
  const setAlert = (alertPayload) => {
    dispatch({ type: SET_ALERT, payload: alertPayload });
    setTimeout(() => clearAlert(), alertPayload.delay);
  };
  const clearAlert = () => {
    dispatch({ type: CLEAR_ALERT });
  };

  return (
    <PostsContext.Provider
      value={{
        posts: state.posts,
        alert: state.alert,
        deletePost,
        addPost,
        editPost,
        setAlert,
        clearAlert,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};
export { PostsContextProvider, PostsContext };
