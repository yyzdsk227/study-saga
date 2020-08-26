import React from "react";

import CounterContainer from "./containers/CounterContainer";
import PostListContainer from "./containers/PostListContainer";

import { Route } from "react-router-dom";
import PostList from "./components/PostList";
import PostPage from "./pages/PostPage";
import PostListPage from "./pages/PostListPage";

function App() {
  return (
    <>
      <CounterContainer />
      <Route path="/" component={PostListPage} exact={true} />
      <Route path="/:id" component={PostPage} />
    </>
  );
}

export default App;
