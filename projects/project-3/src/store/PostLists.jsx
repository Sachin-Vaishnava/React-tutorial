import { createContext, useReducer,useState,useEffect } from "react";

export let Post_List = createContext({
  list: [],
  addPost: () => {},
  deletePost: () => {},
  fetching: () => {},
});
let postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "delete_item") {
    newPostList = currPostList.filter((post) => post.id !== action.payload.Id);
  } else if (action.type === "add_items") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "add_Intial_Post") {
    newPostList = action.payload.post;
  }

  return newPostList;
};

let PostListProvider = ({ children }) => {
  let [list, dispatchPostList] = useReducer(postListReducer, []);
  let [fetching, setFetching] = useState(false);

  let addPost = (resobj) => {

    

    dispatchPostList({
      type: "add_items",
      payload: resobj ,
    });
  };

  const apiPost = (post) => {
    dispatchPostList({
      type: "add_Intial_Post",
      payload: {
        post,
      },
    });
  };

  const deletePost = (Id) => {
    dispatchPostList({
      type: "delete_item",
      payload: {
        Id,
      },
    });
  };

  useEffect(() => {
    let controller= new AbortController();
    let signal=controller.signal;
    setFetching(true);
    fetch("https://dummyjson.com/posts",{signal} )
      .then((res) => res.json())
      .then((data) => {
        apiPost(data.posts)
        setFetching(false);
      });
      return()=>{
        
        controller.abort();
      }
      
  }, []);

  return (
    <Post_List.Provider value={{ list, addPost, deletePost, fetching }}>
      {children}
    </Post_List.Provider>
  );
};

export default PostListProvider;
