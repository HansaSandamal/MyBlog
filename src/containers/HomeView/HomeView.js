import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";

import Blog from "../../Components/Blog/Blog";
import { getBlogs } from "../../actions/bloggerActions";
import { Container,Row } from "react-bootstrap";
//import "./homeView.css";

export function HomeView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs());
  }, []);

  const myBlogs = useSelector((state) => state.blog.blogs);

  return (
    <>
     
      <Container className="bg-black ">
        <Row className="justify-content-md-center">
        
        <div class="p-3 mb-2 bg-warning text-black"><h1>My Blog</h1></div>
        </Row>
        <Row className="justify-content-md-center">
        {myBlogs.map((value) => {
          return <Blog value={value} />;
        })}
        </Row>
      
      </Container>
    </>
  );
}

export default HomeView;
