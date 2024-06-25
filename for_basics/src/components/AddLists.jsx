import { useState } from "react";
import Items from "./Items";
const AddList = ({ Item}) => {
  let [activeItems,setActiveItem]=useState([]);
  // let buttonClicked=(clicl)=>{
  //   console.log(`${clicl} is clicked
  //   `)
  // }
 const handleButtonClicked=(items,event)=>{
    let newItem=[...activeItems,items]
    setActiveItem(newItem)

  }


  return (
    <ul className="list-group">
      {Item.map((items) => (
        <Items key={items} bought={activeItems.includes(items)} Itemi={items} handleButtonClicked={(event)=> handleButtonClicked(items,event)}/>
      ))}
    </ul>
  );
};
export default AddList;
