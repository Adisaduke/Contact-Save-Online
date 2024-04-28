import React from 'react'
import useInput from '../formHooks/hooks/use-input'
import './ContactForm.css'
import LoadingSpinner from '../UI/LoadingSpinner'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMdCheckmark } from "react-icons/io";



const ContactForm = (props) => {
  const navigate = useNavigate()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null);


  const HandleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };


  const addAnotherNumberHandler = () => {
    // navigate('/newcontact', { replace: true });

  };

  function addAnotherNumberHandlers() {
    window.location.reload()
  }


  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    InputBlurHandler: firstNameBlurHandler,
    valueChangeHandler: firstNameChangedHandler,
    reset: resetFirstNameInput
  } = useInput({
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
    validateValue: value => value.includes('@'),
  })


  const {
    value: enteredPhoneNumber,
    isValid: enteredPhoneNumberIsValid,
    hasError: phoneNumberInputHasError,
    InputBlurHandler: phoneNumberBlurHandler,
    valueChangeHandler: phoneNumberChangedHandler,
    reset: resetPhoneNumberInput
  } = useInput({
    validateValue: value => value.trim() !== "",
  });




  const {
    value: enteredAddress1,
    isValid: enteredAddress1IsValid,
    hasError: address1InputHasError,
    InputBlurHandler: address1BlurHandler,
    valueChangeHandler: address1ChangedHandler,
    reset: resetAddress1Input
  } = useInput({
    validateValue: value => value.trim() !== "",
  });



  const {
    value: enteredAddress2,
    valueChangeHandler: address2ChangedHandler,
    reset: resetAddress2Input
  } = useInput({
    validateValue: value => value.trim() == "",
  });


  const {
    value: enteredState,
    valueChangeHandler: stateChangedHandler,
    reset: resetStateInput
  } = useInput({
    validateValue: value => value.trim() == "",
  });


  const {
    value: enteredCountry,
    valueChangeHandler: countryChangedHandler,
    reset: resetCountryInput
  } = useInput({
    validateValue: value => value.trim() == "",
  });


  const {
    value: enteredFile,
    valueChangeHandler: fileChangedHandler,
    reset: resetFileInput
  } = useInput({
    validateValue: value => value.trim() == "",
  });



  const {
    value: enteredAbout,
    isValid: enteredAboutIsValid,
    hasError: aboutInputHasError,
    InputBlurHandler: aboutBlurHandler,
    valueChangeHandler: aboutChangedHandler,
    reset: resetAboutInput
  } = useInput({
    validateValue: value => value.trim() !== "",
  });





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

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    setIsLoading(true)


    if (!enteredFirstNameIsValid && !enteredLastNameIsValid &&
      !enteredEmailIsValid && !enteredPhoneNumberIsValid &&
      !enteredAddress1IsValid && !enteredAboutIsValid
    ) {
      return;
    }


    resetFirstNameInput();
    resetEmailInput();
    resetLastNameInput();
    resetPhoneNumberInput();
    resetAddress1Input();
    resetAddress2Input();
    resetStateInput();
    resetCountryInput();
    resetFileInput();
    resetAboutInput();

    try {
      // Call the onSaveContact function passed as props
      await props.onSaveContact(
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
      );

      // If successful, set isSubmitted to true

      setIsSubmitted(true);


      // Navigate to home page after 2 seconds
      // setTimeout(() => {
      //   setIsLoading(false)
      //   navigate('/');
      // }, 2000);
    } catch (error) {
      // Handle error if submission fails
      console.error('Error submitting form:', error);
      setIsLoading(false)
    }
  };




  const firstNameInputClasses = firstNameInputHasError ? 'form-control invalid' : 'form-control'
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control'
  const lastNameInputClasses = lastNameInputHasError ? 'form-control invalid' : 'form-control'
  const phoneNumberInputClasses = phoneNumberInputHasError ? 'form-control invalid' : 'form-control'
  const address1InputClasses = address1InputHasError ? 'form-control invalid' : 'form-control'
  const aboutInputClasses = aboutInputHasError ? 'form-control invalid' : 'form-control'



  return (
    <form onSubmit={formSubmitHandler}>
      <div className='container'>
        {isLoading &&
          <div className='loading'>
            <LoadingSpinner />
          </div>
        }
        {isSubmitted && (
          <div className='backdrop'>
            <div className='success-message'>
              <div className='mark_icon'><IoMdCheckmark /></div>
              <p>Name added successfully!</p>
              <div className='successful_button'>
                <Link to='/'><button>Go back to home</button></Link>
                <button onClick={addAnotherNumberHandlers}>Add another number</button>
              </div>
            </div>

          </div>
        )}

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
          <label htmlFor="file">Select an Image</label>
          <input type='file' accept='image/*'
            onChange={HandleImageChange}
            value={enteredFile}
          />

          {selectedImage && (
            <div>
              <img src={selectedImage} alt="Selected" style={{ maxWidth: '100px' }} />
            </div>
          )}
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
          <button disabled={!formIsValid}>Submit</button>
        </div>

      </div>



    </form>
  )
}

export default ContactForm