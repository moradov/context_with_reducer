import React, { useReducer } from 'react';
import postReducer from './postReducer';
const PostsContext = React.createContext();

const PostsContextProvider = ({ children }) => {
  const initState = {
    posts: [
      { title: 'post1', body: 'content1', id: 'post1' },
      { title: 'post2', body: 'content2', id: 'post2' },
      { title: 'post3', body: 'content3', id: 'post3' },
    ],
  };
  const [state, dispatch] = useReducer(postReducer, initState);

  const deletePost = (postId) => {
    dispatch({ type: 'DELETE_POST', payload: postId });
  };

  const addPost = (post) => {
    dispatch({ type: 'ADD_POST', payload: post });
  };

  return (
    <PostsContext.Provider
      value={{
        posts: state.posts,
        deletePost,
        addPost,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};
export { PostsContextProvider, PostsContext };
