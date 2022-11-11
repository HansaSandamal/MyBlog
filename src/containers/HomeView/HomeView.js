import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";

import Blog from "../../Components/Blog/Blog";
import { getBlogs } from "../../actions/bloggerActions";
import "./homeView.css";

export function HomeView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs());
  }, []);

  const myBlogs = useSelector((state) => state.blog.blogs);

  return (
    <>
      <h1>My Blog</h1>
      <div className="container">
        {myBlogs.map((value) => {
          return <Blog value={value} />;
        })}
      </div>
    </>
  );
}

export default HomeView;
