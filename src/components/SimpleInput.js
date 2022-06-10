import React, {useState} from 'react'


const SimpleInput = (props) => {
	const [enteredName, setEnteredName] = useState('')
	const [enteredNameTouched, setEnteredNameTouched] = useState(false)

	const enteredNameIsValid = enteredName.trim() !== ''
	const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched

	const [enteredEmail, setEnteredEmail] = useState('')
	const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)

	const enteredEmailIsValid = enteredEmail.includes('@')
	const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched

	let formIsValid = false

	if (enteredNameIsValid && enteredEmailIsValid) {
		formIsValid = true
	}



	const nameInputChangeHandler = event => {
		setEnteredName(event.target.value)
	}

	const nameInputBlurHandler = event => {
		setEnteredNameTouched(true)
	}


	const emailInputChangeHandler = event => {
		setEnteredEmail(event.target.value)
	}

	const emailInputBlurHandler = event => {
		setEnteredEmailTouched(true)
	}


	const formSubmissionHandler = event => {
		event.preventDefault()
		setEnteredNameTouched(true)
		setEnteredEmailTouched(true)

		if (!enteredNameIsValid || !enteredEmailIsValid) {
			return; 
		}
		setEnteredName('')
		setEnteredEmail('')
		setEnteredNameTouched(false)
		setEnteredEmailTouched(false)
		//nameInputRef.current.value = '' => not ideal, don't manipulate the DOM
	}

	
	const nameInputClasses = nameInputIsInvalid ?
		'form-control invalid' : 'form-control'

	return (
		<form onSubmit={formSubmissionHandler}>
		<div className={nameInputClasses}>
			<label htmlFor='name'>Your Name</label>
				<input
					type='text'
					id='name'
					onChange={nameInputChangeHandler}
					onBlur={nameInputBlurHandler}
				/>
				{nameInputIsInvalid && <p className='error-text'>Name must not be empty.</p>}
			<label htmlFor='email'>Your Email</label>
				<input
					type='text'
					id='email'
					onChange={emailInputChangeHandler}
					onBlur={emailInputBlurHandler}
				/>
				{emailInputIsInvalid && <p className='error-text'>Correctly formatted email must be entered.</p>}
		</div>
		<div className="form-actions">
			<button disabled={!formIsValid}>Submit</button>
		</div>
		</form>
	);
};

export default SimpleInput;
