import React from "react";
import { useLocation, useParams } from "react-router";
import { Card, Button } from "react-bootstrap";

// import "./details.css";

function Details(props) {
  const { type } = useParams;
  const stateParamVal = useLocation().state.type;

  console.log(stateParamVal);

  return (
    // <div className="containerDetails">
    //   <div className="title">
    //     <h1>Title</h1>
    //     <h1>{stateParamVal.title}</h1>
    //   </div>

    //   <div className="body">
    //     <p>{stateParamVal.body}</p>
    //   </div>
    // </div>
    <Card>
    <Card.Header className="bg-dark text-white">{stateParamVal.title}</Card.Header>
    <Card.Body className="bg-warning">
      <blockquote className="blockquote mb-0 bg-warning">
        <p>
          {' '}
          {stateParamVal.body}{' '}
        </p>
        <footer className="blockquote-footer">
          Someone famous in <cite title="Source Title">{stateParamVal.title}</cite>
        </footer>
      </blockquote>
    </Card.Body>
  </Card>
  );
}

export default Details;
