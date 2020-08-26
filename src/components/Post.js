import React from "react";

function Post({ post, onClick }) {
  const { title, body } = post;
  return (
    <div>
      <button onClick={onClick}>홈으로</button>

      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
}

export default Post;
