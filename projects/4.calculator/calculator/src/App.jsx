import Display from "./components/Display"
import Button from "./components/Button"
import { useState } from "react"
function App() {
 let [currentCal,setCurrentCal]=useState('')
let onButtonClick=(buttonEvent)=>{
  if(buttonEvent==='c'){
    setCurrentCal('')
  }
  else if(buttonEvent==='='){
    let result=eval(currentCal)
    setCurrentCal(result)

  }else{
    let newValue=currentCal+buttonEvent;
    setCurrentCal(newValue)
  }
}
  return (
    <>
     <div className="calculatorContainer">  
       <Display valuePassed={currentCal}/>
       <Button onButtonClick={onButtonClick} />
     </div>
    </>
  )
}

export default App
