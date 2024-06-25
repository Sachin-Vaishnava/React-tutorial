import { useState, useReducer } from "react";
import AppName from "./AppName";
import AddTodo from "./addTodo";
import TodoItems from "./todoitems";
import Welcome from "./Welcome";
import { ItemContext } from "./store/Items-context";

let newTodoItemReducer = (currentState,action) => {
 let newTodoItem
  if(action.type=== "ADD_ITEMS"){
    newTodoItem= [
      ...currentState,
      { name:action.payload.itemName, date:action.payload.itemDate },
    ];

  }else if(action.type==="DELETE_ITEMS"){
    newTodoItem =currentState.filter((items) => items.name !=action.payload.itemName ); 
    
  }
  return newTodoItem;
};
function App() {
  // let [todoitems, setTodoItems] = useState([
  //   // { name: "Buy Milk", date: "10/02/2024" },
  // ]);
  let [todoitems, dispatchTodo] = useReducer(newTodoItemReducer, []);// which uses the pure function to edit the things similar like useState Function instead we dispatch the items as object the pure function takes the currentState *todoitems and dispatch item and set the things accorndingly

  const addNewItem = (itemName, itemDate) => {
    // let newItems = [...todoitems, { name: itemName, date: itemDate }];
    let addActionReducer = {
      type: "ADD_ITEMS",
      payload: { itemName, itemDate },
    };
    dispatchTodo(addActionReducer);
    // setTodoItems((currentValue) => [
    //   ...todoitems,
    //   { name: itemName, date: itemDate },
    // ]);
  };
  let deleteItem = (deleted) => {
    let deleteItemReducer={
      type:"DELETE_ITEMS",
      payload:{
        deleted,
      }
    }
    dispatchTodo(deleteItemReducer);
    // let newList = todoitems.filter((items) => items.name != deleted);
    // setTodoItems(newList);
    // setTodoItems("");
  };
  let defaultValue = [{ name: "sachin", date: "Today" }];

  return (
    <ItemContext.Provider value={{ todoitems, addNewItem, deleteItem }}>
      <center className="todo-container">
        <AppName></AppName>
        <div className="container text-center">
          <AddTodo />
          <Welcome></Welcome>
          <TodoItems />
        </div>
      </center>
    </ItemContext.Provider>
  );
}

export default App;
