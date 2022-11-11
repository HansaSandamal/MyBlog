import { GET_BLOGS, GET_BLOGS_SUCCESS, INCREMENT } from "./types.js";
import { fetchBlogList } from "../api/api.js";

// export const getBlogs = async () => {
//   let blogs = await fetchBlogList();
//   return {
//     type: GET_BLOGS,
//     payload: { blogs },
//   };
// };

export const getBlogs = () => {
   return async (dispatch) => {
       try {
           let blogs = await fetchBlogList()

           dispatch({ type: GET_BLOGS, payload: { blogs } });
       } catch (error) {
           console.log(error);
       }

   }
}

export default getBlogs;
