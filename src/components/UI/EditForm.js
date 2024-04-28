import React from 'react'
import useInput from '../formHooks/hooks/use-input'
import { useNavigate } from 'react-router-dom';
import './EditForm.css'
import LoadingSpinner from './LoadingSpinner'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'



const EditForm = (props) => {

  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();

  const [formData, setFormData] = useState(data);
  const [formOpened, setFormOpened] = useState(true)
  const [formISCancled, setFormISCancled] = useState(false)



  const EditFormCancel = () => {
    // Navigate back to the home page
    // navigate('/');
    setFormISCancled(true)
  };

  const CancelEditYes = () => {
    navigate('/');
  }

  const CancelEditNo = () => {
    setFormISCancled(false)
  }


  useEffect(() => {
    setFormData(data);
  }, [data]);


  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    InputBlurHandler: firstNameBlurHandler,
    valueChangeHandler: firstNameChangedHandler,
    reset: resetFirstNameInput
  } = useInput({
    initialValue: data.firstName,
    validateValue: value => value.trim() !== "",
  });



  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    InputBlurHandler: lastNameBlurHandler,
    valueChangeHandler: lastNameChangedHandler,
    reset: resetLastNameInput
  } = useInput({
    initialValue: data.lastName,
    validateValue: value => value.trim() !== "",
  });


  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    InputBlurHandler: emailBlurHandler,
    valueChangeHandler: emailChangedHandler,
    reset: resetEmailInput
  } = useInput({
    initialValue: data.email,
    validateValue: value => value.includes('@'),
  });


  const {
    value: enteredPhoneNumber,
    isValid: enteredPhoneNumberIsValid,
    hasError: phoneNumberInputHasError,
    InputBlurHandler: phoneNumberBlurHandler,
    valueChangeHandler: phoneNumberChangedHandler,
    reset: resetPhoneNumberInput
  } = useInput(value => value.trim() !== "")




  const {
    value: enteredAddress1,
    isValid: enteredAddress1IsValid,
    hasError: address1InputHasError,
    InputBlurHandler: address1BlurHandler,
    valueChangeHandler: address1ChangedHandler,
    reset: resetAddress1Input
  } = useInput(value => value.trim() !== "")



  const {
    value: enteredAddress2,
    valueChangeHandler: address2ChangedHandler,
    reset: resetAddress2Input
  } = useInput(value => value.trim() == "")


  const {
    value: enteredState,
    valueChangeHandler: stateChangedHandler,
    reset: resetStateInput
  } = useInput(value => value.trim() == "")


  const {
    value: enteredCountry,
    valueChangeHandler: countryChangedHandler,
    reset: resetCountryInput
  } = useInput(value => value.trim() == "")


  const {
    value: enteredFile,
    valueChangeHandler: fileChangedHandler,
    reset: resetFileInput
  } = useInput(value => value.trim() == "")



  const {
    value: enteredAbout,
    isValid: enteredAboutIsValid,
    hasError: aboutInputHasError,
    InputBlurHandler: aboutBlurHandler,
    valueChangeHandler: aboutChangedHandler,
    reset: resetAboutInput
  } = useInput(value => value.trim() !== "")





  let formIsValid = false

  if (enteredFirstNameIsValid && enteredEmailIsValid &&
    enteredLastNameIsValid && enteredPhoneNumberIsValid &&
    enteredAddress1IsValid && enteredAboutIsValid
  ) {
    formIsValid = true
  }
  else {
    formIsValid = false
  }

  const formUpdateHandler = (e) => {
    e.preventDefault();


    if (!enteredFirstNameIsValid && !enteredLastNameIsValid &&
      !enteredEmailIsValid && !enteredPhoneNumberIsValid &&
      !enteredAddress1IsValid && !enteredAboutIsValid
    ) {
      return;
    }


    // resetFirstNameInput();
    // resetEmailInput();
    // resetLastNameInput();
    // resetPhoneNumberInput();
    // resetAddress1Input();
    // resetAddress2Input();
    // resetStateInput();
    // resetCountryInput();
    // resetFileInput();
    // resetAboutInput();

    props.onUpdateContact(

      {
        firstName: enteredFirstName,
        lastName: enteredLastName,
        email: enteredEmail,
        phone: enteredPhoneNumber,
        address1: enteredAddress1,
        address2: enteredAddress2,
        state: enteredState,
        country: enteredCountry,
        file: enteredFile,
        about: enteredAbout
      }
    )


  }

  const firstNameInputClasses = firstNameInputHasError ? 'form-control invalid' : 'form-control'
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control'
  const lastNameInputClasses = lastNameInputHasError ? 'form-control invalid' : 'form-control'
  const phoneNumberInputClasses = phoneNumberInputHasError ? 'form-control invalid' : 'form-control'
  const address1InputClasses = address1InputHasError ? 'form-control invalid' : 'form-control'
  const aboutInputClasses = aboutInputHasError ? 'form-control invalid' : 'form-control'



  return (
    <form onSubmit={formUpdateHandler}>
      {formOpened && <div className='container'>

        {props.isLoading && (
          <div className='loading'>
            <LoadingSpinner />
          </div>
        )}

        {formISCancled && <div id="messageOverlay">
          <div class="messageBox">
            <p><span className='Edit_disclaimer'>Discarding Changes:</span> This action will permanently discard any unsaved  <br />edits you made to this contact. Are you sure you want to cancle the edit?</p>
            <div className='edit_cancel_button'>
              <button onClick={CancelEditNo}>No</button>
              <button onClick={CancelEditYes} className='yes'>Yes</button>
            </div>
          </div>
        </div>}

        <div className='control-group'>
          <div className={firstNameInputClasses}>
            <label htmlFor='firstName'>First Name</label>
            <input type='text' id='firstName'
              onChange={firstNameChangedHandler}
              onBlur={firstNameBlurHandler}
              value={enteredFirstName}
            />
            {firstNameInputHasError &&
              <p className="error-text">First Name must not be empty</p>
            }

          </div>
          <div className={lastNameInputClasses}>
            <label htmlFor="lastName">Last Name</label>
            <input type='text' id="lastName"
              onChange={lastNameChangedHandler}
              onBlur={lastNameBlurHandler}
              value={enteredLastName}
            />
            {lastNameInputHasError &&
              <p className="error-text">Enter a valid name</p>
            }
          </div>
        </div>
        <div className={emailInputClasses}>
          <label htmlFor='email'>Email Address</label>
          <input type='email' id='email'
            onChange={emailChangedHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
          />
          {emailInputHasError &&
            <p className="error-text">Enter a valid email</p>
          }

        </div>
        <div className={phoneNumberInputClasses}>
          <label htmlFor='phoneNumber'>Phone Number</label>
          <input type='text' inputMode='numeric'
            onChange={phoneNumberChangedHandler}
            onBlur={phoneNumberBlurHandler}
            value={enteredPhoneNumber}
          />
          {phoneNumberInputHasError &&
            <p className="error-text">Number must not be empty</p>
          }

        </div>

        <div className={address1InputClasses}>
          <label htmlFor='address1'>Address 1</label>
          <input type='text' id='address1'
            onChange={address1ChangedHandler}
            onBlur={address1BlurHandler}
            value={enteredAddress1}
          />
          {address1InputHasError &&
            <p className="error-text">Address must not be empty</p>
          }

        </div>
        <div className='form-control'>
          <label htmlFor='address2'>Address 2</label>
          <input type='text' id='address2'
            onChange={address2ChangedHandler}
            value={enteredAddress2}
          />
        </div>

        <div className='country'>
          <div className='form-control'>
            <label htmlFor="country">Country</label>
            <input type='text' id='country'
              onChange={countryChangedHandler}
              value={enteredCountry}
            />
          </div>
          <div className='form-control'>
            <label htmlFor="state">State</label>
            <input type='text' id='state'
              onChange={stateChangedHandler}
              value={enteredState}
            />
          </div>
        </div>
        <div className='form-control'>
          <label htmlFor="file">Select Image</label>
          <input type='file' id="file"
            onChange={fileChangedHandler}
            value={enteredFile}
          />
        </div>

        <div className={aboutInputClasses}>
          <label htmlFor='about'>About</label>
          <textarea type='text' id='about'
            rows='5' cols='50'
            onChange={aboutChangedHandler}
            onBlur={aboutBlurHandler}
            value={enteredAbout}
          />
          {aboutInputHasError &&
            <p className="error-text">Your input text must not below 100 characters</p>
          }

        </div>

        <div className='form-actions'>
          <button disabled={!formIsValid}>Update</button>
          <button onClick={EditFormCancel}>Cancel</button>
        </div>
      </div>}



    </form>
  )
}

export default EditForm