import React, { useEffect, useState } from "react";

import "./home.css";
import Blog from "../../Components/Blog/Blog";

function Home(props) {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const bloggerData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const jsonData = await response.json();
      setBlogData(jsonData);
    };

    bloggerData();
  }, []);

  return (
    <>
      <h1>My Blog</h1>
      <div className="container">
        {blogData.map((value) => {
          return <Blog value={value} />;
        })}
      </div>
    </>
  );
}

export default Home;
