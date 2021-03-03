import React from 'react';
import { withRouter } from 'react-router-dom';
const PostItem = ({ post: { title, body, id }, deletePost, history }) => {
  return (
    <div>
      <h2> {title} </h2>
      <p> {body} </p>
      <div>
        <button onClick={() => deletePost(id)}> delete </button>
        <button onClick={() => history.push('edit/' + id)}>edit</button>
      </div>
    </div>
  );
};

export default withRouter(PostItem);
