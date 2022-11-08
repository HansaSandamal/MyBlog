import React from "react";
import { useLocation, useParams } from "react-router";

import "./details.css";

function Details(props) {
  const { type } = useParams;
  const stateParamVal = useLocation().state.type;

  console.log(stateParamVal);

  return (
    <div className="containerDetails">
      <div className="title">
        <h1>Title</h1>
        <h1>{stateParamVal.title}</h1>
      </div>

      <div className="body">
        <p>{stateParamVal.body}</p>
      </div>
    </div>
  );
}
export default Details;
