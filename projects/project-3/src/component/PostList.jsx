import { Post_List } from "../store/PostLists";
import PostCard from "./PostCard";
import { useContext, useEffect, useState } from "react";
import Welcome from "./WelcomeMessage";
import Loading from "./Loding";
let PostList = () => {
  let { list, fetching } = useContext(Post_List);
  console.log(`hello ${list}`);

  return (
    <>
      {fetching && <Loading></Loading>}

      {!fetching && list.length === 0 && <Welcome />}
      {!fetching &&
        list.map((items) => <PostCard key={items.id} items={items}></PostCard>)}
    </>
  );
};
export default PostList;
