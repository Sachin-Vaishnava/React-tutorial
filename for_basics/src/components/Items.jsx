import styles from './Items.module.css'
const Items=({Itemi, bought,handleButtonClicked})=>{
  // const handleButtonClicked=(event)=>{
  //   console.log(event)
  //   console.log(`${Item} has been clicked`)

  // }
  return <>
  <li className={`list-group-item ${bought && "active"}`}>
          <span>{Itemi}</span>
          <button className={`${styles.button} btn btn-info`} onClick={handleButtonClicked}>
           Buy
          </button>
        </li></>

}
export default Items;