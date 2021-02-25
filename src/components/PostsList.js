import React, { useContext } from 'react';
import { PostsContext } from '../context/PostsContext/postContext';

import PostItem from './PostItem';

const PostsList = () => {
  const { posts, deletePost } = useContext(PostsContext);
  return (
    <div>
      {posts &&
        posts.map((post) => <PostItem post={post} deletePost={deletePost} />)}
    </div>
  );
};

export default PostsList;
