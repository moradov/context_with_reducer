import React, { useState, useContext } from 'react';
import { PostsContext } from '../context/PostsContext/postContext';
import { withRouter } from 'react-router-dom';
import useAlert from '../hooks/useAlert';

import Container from './UI/Container';

const AddPost = ({ history }) => {
  const { addPost } = useContext(PostsContext);
  const [postContent, setPostContent] = useState({ title: '', body: '' });
  ///useAlert hook for rendering an alert after submiting post
  const [successAlertJSX, setSuccessAlert] = useAlert(
    'user added',
    'green',
    'bottom',
    5000
  );
  ///useAlert hook for rendering an alert after submiting post
  const [dangerAlertJSX, setDangerAlert] = useAlert(
    'all inputs are required',
    'red',
    'bottom',
    5000
  );
  /// submit post
  const addPostClicked = () => {
    //chek if inputs are not empty
    if (postContent.title !== '' && postContent.body !== '') {
      //prepare post object
      const id = Math.floor(Math.random() * 100);
      const post = {
        id,
        title: postContent.title,
        body: postContent.body,
      };
      addPost(post);
      setSuccessAlert();
      //clear post state after submiting post
      setPostContent({ title: '', body: '' });
      //redirect after submiting post
      setInterval(() => history.push('/'), 5000);
    } else {
      //show warning alert if inputs are not valid
      setDangerAlert();
    }
  };

  return (
    <Container>
      <input
        value={postContent.title}
        onChange={(e) =>
          setPostContent({ ...postContent, title: e.target.value })
        }
      />
      <textarea
        value={postContent.body}
        onChange={(e) =>
          setPostContent({ ...postContent, body: e.target.value })
        }
      ></textarea>

      <button onClick={addPostClicked}>Add</button>
      {dangerAlertJSX}
      {successAlertJSX}
    </Container>
  );
};

export default withRouter(AddPost);
