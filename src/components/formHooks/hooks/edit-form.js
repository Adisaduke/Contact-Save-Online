import { useState } from "react";

const useInputEdit = (validateValue) =>{
    
  const [enteredValue, setEnteredValue] = useState('')
  const [isTouched, setIsTouched] = useState(false)


  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;


  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value)
    // setEnteredNameIsValid(true)
    }
  

  const InputBlurHandler = (e) => {
    setIsTouched(true)
  }

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false)
  }

   
  return{
    value: enteredValue, 
    isValid: valueIsValid,
    hasError, 
    valueChangeHandler, 
    InputBlurHandler,
    reset
  }
};


export default useInputEdit;