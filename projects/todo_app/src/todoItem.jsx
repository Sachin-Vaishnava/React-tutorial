import { useContext } from "react";
import { ItemContext } from "./store/Items-context";

 let TodoItem=({ todoName, todoDate })=>{
  const {deleteItem}=useContext(ItemContext)
  return (
    <div className="row  kg-row">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button
          type="button"
          onClick={()=>deleteItem(todoName)}
          className="btn btn-danger kg-button"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
export default TodoItem
