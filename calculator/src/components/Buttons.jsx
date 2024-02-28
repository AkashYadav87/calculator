import style from "./Buttons.module.css"

const Buttons = ({handleClick}) => {
  const btnList = [
    "C",
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
    "9",
    "0",
    "=",
    ".",
  ];

  return (
  <div className={style.buttonContainer}>
    {btnList.map((btn)=>
    (
       <button onClick={(event)=>handleClick(btn)} >{btn}</button>
    ))}
   
  </div>
  );
};
export default Buttons;