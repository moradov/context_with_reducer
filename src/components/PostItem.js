import React from 'react';
import { withRouter } from 'react-router-dom';
import { Card, Button, Container } from 'react-bootstrap';
const PostItem = ({ post: { title, body, id }, deletePost, history }) => {
  return (
    <Container>
      <Card style={{ marginTop: '10px' }}>
        <Card.Body>
          <Card.Title>{title} </Card.Title>
          <Card.Text>{body}</Card.Text>
          <Button variant="outline-danger" onClick={() => deletePost(id)}>
            Delete
          </Button>
          <Button
            variant="outline-primary ml-2"
            onClick={() => history.push('edit/' + id)}
          >
            Edit
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default withRouter(PostItem);
