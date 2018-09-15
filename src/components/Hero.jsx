import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Example = (props) => {
  let { title, link, children } = props
  return (
    <Jumbotron>
      <Container>
        <h1 className="display-3">{ title }</h1>
        <p className="lead">
          <a href={`http://${link}`}>{link}</a>
        </p>

        { children }

      </Container>
    </Jumbotron>
  );
};

export default Example;
