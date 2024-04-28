import { useState } from "react";

// const useInput = (validateValue) =>{
    
//   const [enteredValue, setEnteredValue] = useState('')
//   const [isTouched, setIsTouched] = useState(false)


//   const valueIsValid = validateValue(enteredValue);
//   const hasError = !valueIsValid && isTouched;


//   const valueChangeHandler = (e) => {
//     setEnteredValue(e.target.value)
//     // setEnteredNameIsValid(true)
//     }
  

//   const InputBlurHandler = (e) => {
//     setIsTouched(true)
//   }

//   const reset = () => {
//     setEnteredValue('');
//     setIsTouched(false)
//   }

   
//   return{
//     value: enteredValue, 
//     isValid: valueIsValid,
//     hasError, 
//     valueChangeHandler, 
//     InputBlurHandler,
//     reset
//   }
// };


const useInput = ({
  initialValue = '',
  validateValue = () => true,
}) => {
  const [enteredValue, setEnteredValue] = useState(initialValue || '');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
    // setEnteredNameIsValid(true);
  };

  const InputBlurHandler = (e) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue(initialValue);
    setIsTouched(false);
  };
   
  return {
    value: enteredValue, 
    isValid: valueIsValid,
    hasError, 
    valueChangeHandler, 
    InputBlurHandler,
    reset
  };
};

export default useInput;