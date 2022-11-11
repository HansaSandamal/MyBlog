import { GET_BLOGS } from "../actions/types.js";

const INITIAL_STATE = {
  blogs: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_BLOGS:
      return {
        ...state,
        blogs: action.payload.blogs,
      };
    default:
      return state;
  }
};
