import React, { useState, useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';

import { PostsContext } from '../context/PostsContext/postContext';
const EditPost = ({ match, history }) => {
  const { posts, editPost, setAlert } = useContext(PostsContext);

  useEffect(() => {
    ///chek if postId is valid
    const postId = match.params.postId;
    const postFound = posts.filter((postItem) => postItem.id === postId)[0];
    if (postFound) {
      setIdValidity(true);
      setPostContent({ title: postFound.title, body: postFound.body });
    } else {
      setIdValidity(false);
    }
    // eslint-disable-next-line
  }, []);

  //
  const [postContent, setPostContent] = useState({ title: '', body: '' });
  const [IdIsValid, setIdValidity] = useState(false);

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
      //clear post state after submiting post
      setPostContent({ title: '', body: '' });
      //show seccess alert
      setAlert({
        message: 'post added succefuly ',
        position: 'bottom',
        color: 'green',
        delay: 3500,
      });
      //redirect after submiting post
      history.push('/');
    } else {
      //show warning alert if inputs are not valid
      setAlert({
        message: 'all inputs are required',
        position: 'bottom',
        color: 'red',
        delay: 3500,
      });
    }
  };

  return (
    <Container>
      {IdIsValid ? (
        <Form variant="mt-4">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
              value={postContent.title}
              onChange={(e) =>
                setPostContent({ ...postContent, title: e.target.value })
              }
              type="text"
              placeholder="Enter Title"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter Your Post Content"
              value={postContent.body}
              onChange={(e) =>
                setPostContent({ ...postContent, body: e.target.value })
              }
            />
          </Form.Group>
          <Button onClick={() => saveEditPostClicked()} variant="primary">
            Edit
          </Button>
        </Form>
      ) : (
        <h1>this id not exist </h1>
      )}
    </Container>
  );
};
export default withRouter(EditPost);
