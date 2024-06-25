import styles from "./Button.module.css";
const Button = ({onButtonClick}) => {
  let inputs = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
   
      <div className={styles.buttonsContainer}>
        {inputs.map((buttonname) => (
          <button className={styles.button} onClick={()=>onButtonClick(buttonname)}>{buttonname}</button>
        ))}
      </div>
   
  );
};
export default Button;
