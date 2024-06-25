import styles from './ItmeInput.module.css'
const ItemInput=({HandleInput})=>{
  return  <input type="text" placeholder="Enter the text here" className={styles.input} onKeyDown={HandleInput}></input>

}
export default ItemInput