import { useContext, useRef } from "react";
import { Post_List } from "../store/PostLists";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  let navigate = useNavigate();

  let { addPost } = useContext(Post_List);

  let titleElement = useRef();
  let userIdElement = useRef();
  let bodyElement = useRef();
  let reactionElement = useRef();
  let tagsElement = useRef();

  let handeleEvent = (event) => {
    event.preventDefault(); // its not prevent.Default don't do the mistake once again
    let title = titleElement.current.value;
    let user = userIdElement.current.value;
    let body = bodyElement.current.value;
    let reaction = reactionElement.current.value;
    let tag = tagsElement.current.value.split(" ");

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        body: body,
        reactions: reaction,
        userId: user,
        tags: tag,
      }),
    })
      .then((res) => res.json())
      .then((resobj) => {addPost(resobj) 
        navigate('/')});
   
  };

  return (
    <form className="createPost" onSubmit={handeleEvent}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post_title
        </label>
        <input
          ref={titleElement}
          type="text"
          className="form-control"
          id="title"
          aria-describedby="emailHelp"
        />
        <label htmlFor="userId" className="form-label">
          UserId
        </label>
        <input
          ref={userIdElement}
          type="text"
          className="form-control"
          id="userId"
          aria-describedby="emailHelp"
        />
        <label htmlFor="Body" className="form-label">
          Post the content
        </label>
        <textarea
          ref={bodyElement}
          rows="4"
          className="form-control"
          id="Body"
          aria-describedby="emailHelp"
        />
        <label htmlFor="reactions" className="form-label">
          Enter The Number Of Reaction
        </label>
        <input
          ref={reactionElement}
          type="text"
          className="form-control"
          id="reactions"
          aria-describedby="emailHelp"
        />
        <label htmlFor="tags" className="form-label">
          Enter the Tags
        </label>
        <input
          ref={tagsElement}
          type="text"
          className="form-control"
          id="tags"
          aria-describedby="emailHelp"
        />
      </div>
      <button   type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default CreatePost;
