import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import SideBar from "./component/SideBar";
import CreatePost from "./component/CreatePost";
import PostCard from "./component/PostCard";
import { useState } from "react";
import PostList from "./component/PostList";
import PostListProvider from "./store/PostLists";
import { Outlet } from "react-router-dom";
function App() {
  let [selected, setSelected] = useState("home");
  return (
    <>
      <PostListProvider>
        <div className="app-container">
          <SideBar selected={selected} setSelected={setSelected}></SideBar>
          <div className="header-container">
            <Header></Header>
           <Outlet/>
            <Footer />
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
