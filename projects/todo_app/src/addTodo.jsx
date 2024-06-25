import { useContext } from "react";
import styles from "./addTodo.module.css";
import { useState } from "react";
import { ItemContext } from "./store/Items-context";
function AddTodo() {
  let [addText, setAddText] = useState("");
  let [addDate, setAddDate] = useState("");
  let {addNewItem}=useContext(ItemContext)
  const newAddText = (e) => {
    setAddText(e.target.value);
  };
  const newAddDate = (e) => {
    setAddDate(e.target.value);
  };
  const addItems = (event) => {
    event.preventDefault();
    addNewItem(addText, addDate);
    setAddText("");
    setAddDate("");
  };

  return (
    <form  className="row kg-row" onSubmit={addItems}>
      <div className="col-6">
        <input
          className={styles.inputs}
          type="text"
          placeholder="enter here"
          onChange={newAddText}
        ></input>
      </div>
      <div className="col-3">
        <input
          className={styles.inputs}
          type="date"
          onChange={newAddDate}
        ></input>
      </div>
      <div className="col-2">
        <button
          type="submit"
          className="btn btn-success kg-button"
        >
          ADD
        </button>
      </div>
    </form>
  );
}
export default AddTodo;
