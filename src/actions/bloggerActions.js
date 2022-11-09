import { GET_BLOGS, GET_BLOGS_SUCCESS } from "./types.js";
import { fetchBlogList } from "../api/api.js";

// export const getBlogs = () => {
//   return async (dispatch) => {
//     try {
//       dispatch({ type: GET_BLOGS });
//       let blogs = await fetchBlogList();
//       dispatch({ type: GET_BLOGS_SUCCESS, payload: { blogs } });
//     } catch (error) {
//       console.log("response.data.message");
//      // dispatch({ type: GET_BLOGS_ERROR });
//     }
//   };
// };
export async function getBlogs() {
    let blogs = await fetchBlogList();
    return {
       type: GET_BLOGS,
       payload:blogs
    }
 }
//  export function itemsRequestSuccess(bool) {
//     return {
//        type: GET_BLOGS_SUCCESS,
//        isLoading: bool,
//     }
//  }