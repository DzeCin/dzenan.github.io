import React from "react";
import Row from "react-bootstrap/Row";

const GetInTouch = ({ heading, message, email }) => {
  return (
    <Row>
      <h2 className="display-6 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
          <span>{message}, <a className="text-decoration-none" href={`mailto:${email}`}>{email}</a>.</span>
      </p>
    </Row>
  );
};

export default GetInTouch;
