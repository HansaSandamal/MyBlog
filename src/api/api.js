
export async function fetchBlogList() {
  
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const blogs = await response.json();
  
  return blogs;
}
