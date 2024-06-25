import { useContext } from "react"
import { ItemContext } from "./store/Items-context"

const Welcome=()=>{
  const {todoitems}=useContext(ItemContext)
  return todoitems.length === 0 && <h1>Welcome to Todo it</h1>

}
export default Welcome