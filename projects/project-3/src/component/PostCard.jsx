import { useContext } from "react";
import { FiDelete } from "react-icons/fi";
import { Post_List } from "../store/PostLists";

let PostCard = ({ items }) => {
  let { deletePost } = useContext(Post_List);
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {items.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={()=> deletePost(items.id)}
          >
            <FiDelete />
          </span>
        </h5>
        <p className="card-text">{items.body}</p>
        {items.tags.map((tag) => (
          <span  key={tag} className="badge text-bg-primary tag">
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          This Post is Reacted By {items.reactions} People
        </div>
      </div>
    </div>
  );
};
export default PostCard;
