import * as postsApi from "../api/posts";
import {
  reducerUtils,
  createPromiseThunk,
  handleAsyncActions,
  createPromiseThunkId,
  handleAsyncActionsId,
  createPromiseSaga,
  createPromiseSagaId,
} from "../lib/asyncUtils";
import { version } from "react-dom";
import { delay, put, call, takeEvery, getContext } from "redux-saga/effects";

const get_posts = "get_posts";
const get_posts_success = "get_posts_success";
const get_posts_error = "get_posts_error";

const get_post = "get_post";
const get_post_success = "get_post_success";
const get_post_error = "get_post_error";

const clear_post = "clear_post";

const go_home = "go_home";

export const getposts = () => ({ type: get_posts });
export const getpost = (id) => ({ type: get_post, payload: id, meta: id });

export const getpostsSaga = createPromiseSaga(get_posts, postsApi.getPosts);
export const getpostSaga = createPromiseSagaId(get_post, postsApi.getPostbyId);

export const myhome = () => ({ type: go_home });

function* gomyHome(action) {
  const history = yield getContext("history");
  history.push("/");
}

export function* postSaga() {
  yield takeEvery(get_posts, getpostsSaga);
  yield takeEvery(get_post, getpostSaga);
  yield takeEvery(go_home, gomyHome);
}

export const clearpost = () => ({ type: clear_post });

const getPostsReducer = handleAsyncActions(get_posts, "posts", true);
const getPostReducer = handleAsyncActionsId(get_post, "post", true);

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
