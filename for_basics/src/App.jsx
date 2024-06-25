import AddList from "./components/AddLists";
import Header from "./components/Header";
import ErrorList from "./components/Errorlists";
import Container from "./components/Container";
import ItemInput from "./components/ItmeInput";
import { useState } from "react";

function App() {
  //  let items = ["fruits", "vegetables", "chicken", "drinks"];
  // let items=[];
//   let [textState,setText]=useState("enter the value")
//  const handleInput=(event)=>{
//     console.log(event.target.value)
//     setText(event.target.value)
//   }
let [items,setItems]=useState(['hi','i'])
const handleInput=(event)=>{
  if(event.key==='Enter'){
    let newFoodItem=event.target.value
    let newState=[...items,newFoodItem]
    event.target.value='';
    setItems(newState) 
  }
}

  return (
    <Container>
      <Header />
      <ItemInput HandleInput={handleInput}/>
      {/* <p>{textState}</p> */}
      <ErrorList Items={items}  />
      <AddList Item={items}  />
    </Container>
  );
}

export default App;
