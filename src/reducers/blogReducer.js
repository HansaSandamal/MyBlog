import { GET_BLOGS, GET_BLOGS_SUCCESS } from "../actions/types.js";

const INITIAL_STATE = {
  blogs: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_BLOGS:
      return {
        ...state,
      };
    default:
      return state;
  }
};
