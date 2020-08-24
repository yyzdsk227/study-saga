import * as postsApi from "../api/posts";
import {
  reducerUtils,
  createPromiseThunk,
  handleAsyncActions,
  createPromiseThunkId,
  handleAsyncActionsId,
} from "../lib/asyncUtils";
import { version } from "react-dom";

const get_posts = "get_posts";
const get_posts_success = "get_posts_success";
const get_posts_error = "get_posts_error";

const get_post = "get_post";
const get_post_success = "get_post_success";
const get_post_error = "get_post_error";

const clear_post = "clear_post";

export const getposts = createPromiseThunk(get_posts, postsApi.getPosts);
export const getpost = createPromiseThunkId(get_post, postsApi.getPostbyId);
// export const getpost = (id) => {
//   return async (dispatch) => {
//     dispatch({ type: get_post, meta: id });
//     const payload = await postsApi.getPostbyId(id);
//     try {
//       dispatch({
//         type: get_post_success,
//         payload,
//         meta: id,
//       });
//     } catch (e) {
//       dispatch({
//         type: get_post_error,
//         payload: e,
//         error: true,
//         meta: id,
//       });
//     }
//   };
// };

export const clearpost = () => ({ type: clear_post });

const getPostsReducer = handleAsyncActions(get_posts, "posts", true);
//const getPostReducer = handleAsyncActionsId(get_post, "post", true);

const getPostReducer = (state, action) => {
  const id = action.meta;
  switch (action.type) {
    case get_post:
      return {
        ...state,
        post: {
          ...state.post,
          [id]: reducerUtils.loadding(state.post[id] && state.post[id].data),
        },
      };
    case get_post_success:
      return {
        ...state,
        post: {
          ...state.post,
          [id]: reducerUtils.success(action.payload),
        },
      };
    //
    case get_posts:
      return {
        ...state,
        post: {
          ...state.post,
          [id]: reducerUtils.error(action.payload),
        },
      };
    default:
      return state;
  }
};

const initialState = {
  posts: reducerUtils.initial(),
  post: {},
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case get_posts:
    case get_posts_success:
    case get_posts_error:
      return getPostsReducer(state, action);
    case get_post:
    case get_post_success:
    case get_post_error:
      return getPostReducer(state, action);
    case clear_post:
      return {
        ...state,
        post: reducerUtils.initial(),
      };
    default:
      return state;
  }
};

export default posts;
// export const post;
