const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

const posts = [
  { id: 1, title: "lotto guide", body: "클릭시 4.321초후 번호 추첨됨" },

  { id: 2, title: "learn thunk", body: "learn redux-thunk 2pick" },

  {
    id: 3,
    title: "learn saga",
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
