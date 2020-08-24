import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "../components/Post";
import { getpost, clearpost } from "../modules/posts";
import { reducerUtils } from "../lib/asyncUtils";

function PostContainer({ postId }) {
  const { loadding, data, error } = useSelector(
    (state) => state.posts.post[postId] || reducerUtils.initial()
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getpost(postId));
    // return () => {
    //   dispatch(clearpost());
    // };
  }, [dispatch, postId]);

  if (loadding && !data) return <div>loadding ing..</div>;
  if (error) return <div>error,,, </div>;
  if (!data) return null;

  return (
    <div>
      <Post post={data} />
    </div>
  );
}

export default PostContainer;
