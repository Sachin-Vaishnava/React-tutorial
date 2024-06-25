import styles from './Display.module.css'
const Display=({valuePassed})=>{
  return (<input type="text" className={styles.text} value={valuePassed}readOnly></input>

  )
}
export default Display