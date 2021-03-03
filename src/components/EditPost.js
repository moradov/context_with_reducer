import React, { useState, useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { PostsContext } from '../context/PostsContext/postContext';
import useAlert from '../hooks/useAlert';
const EditPost = ({ match, history }) => {
  const { posts, editPost } = useContext(PostsContext);

  useEffect(() => {
    ///chek if postId is valid
    const postId = match.params.postId;
    const postFound = posts.filter((postItem) => postItem.id === postId)[0];
    if (postFound) {
      setIdValidity(false);
      setPostContent({ title: postFound.title, body: postFound.body });
    } else {
      setIdValidity(true);
    }
    // eslint-disable-next-line
  }, []);

  //
  const [postContent, setPostContent] = useState({ title: '', body: '' });
  const [IdIsValid, setIdValidity] = useState(false);

  ///useAlert hook for rendering an alert after submiting post
  const [successAlertJSX, setSuccessAlert] = useAlert(
    'post edited successfuly',
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

  const saveEditPostClicked = () => {
    //chek if inputs are not empty
    if (postContent.title !== '' && postContent.body !== '') {
      //prepare post object
      const EditedPost = {
        id: match.params.postId,
        title: postContent.title,
        body: postContent.body,
      };
      editPost(EditedPost);
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
    <div>
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
      <button onClick={saveEditPostClicked}>save</button>
      {dangerAlertJSX}
      {successAlertJSX}
    </div>
  );
};

export default withRouter(EditPost);
