import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getposts } from "../modules/posts";
import PostList from "../components/PostList";

const PostListContainer = () => {
  const { loadding, data, error } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    // if (data) return;
    dispatch(getposts());
  }, [dispatch]);

  if (loadding && !data) return <div>로딩중,,,</div>;
  if (error) return <div>error,,</div>;
  if (!data) return null;

  return (
    <div style={{ position: "absolute", top: "1%", left: "1%" }}>
      <PostList posts={data} />
    </div>
  );
};

export default PostListContainer;
