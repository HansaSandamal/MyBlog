import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";

//import "./blog.css";

function Blog(props) {
  const { value } = props;
  //const value2 = useSelector((state) => state.blog.blogs);

  return (
    <Card style={{ width: "18rem", margin: "3px" }}>
      <Card.Body>
        <Card.Title>{value.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="warning">
          <Link to={"/details/" + value.id} state={{ type: value }}>
            See more
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Blog;
