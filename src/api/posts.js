const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

const posts = [
  { id: 1, title: "learn redux", body: "learn redux shit of mas" },

  { id: 2, title: "learn redux-thunk", body: "learn redux-thunk shit of good" },

  {
    id: 3,
    title: "learn redux-saga",
    body: "learn redux-saga shit of saga? fuc",
  },
];

export const getPosts = async () => {
  await sleep(500);
  return posts;
};

export const getPostbyId = async (id) => {
  await sleep(500);
  return posts.find((post) => post.id === id);
};
