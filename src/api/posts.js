const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

const posts = [
  { id: 1, title: "learn redux", body: "learn redux pick me up" },

  { id: 2, title: "learn redux-thunk", body: "learn redux-thunk 2pick" },

  {
    id: 3,
    title: "learn redux-saga",
    body: "learn redux-saga 1pick",
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
