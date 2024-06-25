import  TodoItem  from "./todoItem";
import styles from "./todoitems.module.css";
import { ItemContext } from "./store/Items-context";
import { useContext } from "react";

let  TodoItems = () => {
 const {todoitems}=useContext(ItemContext)
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoitems.map((items) => (
          <TodoItem
          key={items.name}
            todoName={items.name}
            todoDate={items.date}
          />
        ))}
      </div>
    </>
  );
};
export default TodoItems;
