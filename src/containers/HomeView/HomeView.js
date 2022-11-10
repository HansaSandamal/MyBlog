import React, { useEffect, useState } from "react";

import Blog from "../../Components/Blog/Blog";
import { getBlogs } from "../../actions/bloggerActions";
import { connect } from "react-redux";

export function HomeView(props) {
  useEffect(() => {
    //props.getBlogs();
    // dispatch(getBlogs());
    mapDispatchToProps();
  }, []);

  return (
    <>
      <h1>My Blog</h1>
      {/* <div className="container">
        {props.blogs.map((value) => {
          return <Blog value={value} />;
        })}
      </div> */}
    </>
  );
}

const mapStateToProps = (state) => ({
  ...state,
});
const mapDispatchToProps = (dispatch) => ({
  getBlogs: (payload) => dispatch(getBlogs(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
