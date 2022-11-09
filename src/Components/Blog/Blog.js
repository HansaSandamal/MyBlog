import React from "react";
import { Link } from "react-router-dom";

import "./blog.css";

function Blog(props) {
  const { value } = props;

  return (
    <div className="box">
      <div className="title">
        <h1>{value.title}</h1>
      </div>

      <nav>
        <Link to={"/details/" + value.id} state={{ type: value }}>
          See more
        </Link>
      </nav>
    </div>
  );
}

export default Blog;
