import React, { useContext } from 'react';

const PostItem = ({ post: { title, body, id }, deletePost }) => {
  return (
    <div>
      <h2> {title} </h2>
      <p> {body} </p>
      <div>
        <button onClick={() => deletePost(id)}> delete </button>
      </div>
    </div>
  );
};

export default PostItem;
