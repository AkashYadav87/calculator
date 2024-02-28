
import style from './Input.module.css';




const Input=({inputVal })=>
{

return <input type='text' value={inputVal} className={style.inputContainer}/>     
     
};
export default Input;