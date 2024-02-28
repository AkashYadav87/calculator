import style from "./Cal.module.css";
import Input from "./components/Input";
import Buttons from "./components/Buttons";
import { useState } from "react";
function App() {

  const[inputVal,setinputVal]=useState("")
  const handleClick=(btn)=>
  {
    if(btn==='C')
    {
      setinputVal("")
    }
    else if(btn==='=')
    {
     const result=eval(inputVal)
     setinputVal(result);
    }
    else
    {
      setinputVal(inputVal+btn)
    }
    
  }

  return (
    <div className={style.container}>
      <Input inputVal={inputVal}></Input>
      <Buttons handleClick={handleClick} ></Buttons>
    </div>
  );
}

export default App;
