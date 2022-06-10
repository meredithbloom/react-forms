import useInput from '../hooks/use-input';


const BasicForm = (props) => {
	//checking for first name
	const {
		value: enteredFirstName,
		isValid: enteredFirstNameIsValid,
		hasError: firstNameInputHasError,
		valueChangeHandler: firstNameChangeHandler,
		inputBlurHandler: firstNameBlurHandler,
		reset: resetFirstNameInput
	} = useInput(value => value.trim() !== '')

	//checking for last name
	const {
		value: enteredLastName,
		isValid: enteredLastNameIsValid,
		hasError: lastNameInputHasError,
		valueChangeHandler: lastNameChangeHandler,
		inputBlurHandler: lastNameBlurHandler,
		reset: resetLastNameInput
	} = useInput(value => value.trim() !== '')

	//checking for email
	const {
		value: enteredEmail,
		isValid: enteredEmailIsValid,
		hasError: emailHasError,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: resetEmailInput
	} = useInput(value => value.includes('@'))

	//overall form validity
	let formIsValid = false
	if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
		formIsValid = true
	}


	//form submission handler
	const formSubmissionHandler = event => {
		event.preventDefault()
		
		if (!formIsValid) {
			return
		}
		console.log(enteredFirstName, enteredLastName, enteredEmail)
		resetFirstNameInput()
		resetLastNameInput()
		resetEmailInput()
	}

	const firstNameInputClasses = firstNameInputHasError ? 'form-control invalid':'form-control'
	const lastNameInputClasses = lastNameInputHasError ? 'form-control invalid':'form-control'
	const emailInputClasses = emailHasError ? 'form-control invalid':'form-control'

	return (
		<form onSubmit={formSubmissionHandler}>
		<div className='control-group'>
			<div className={firstNameInputClasses}>
			<label htmlFor='name'>First Name</label>
					<input
						type='text'
						id='first-name'
						value={enteredFirstName}
						onChange={firstNameChangeHandler}
						onBlur={firstNameBlurHandler}
					/>
					{firstNameInputHasError && <p className='error-text'>Please enter a first name.</p>}
			</div>
			<div className={lastNameInputClasses}>
			<label htmlFor='name'>Last Name</label>
					<input
						type='text'
						id='last-name'
						value={enteredLastName}
						onChange={lastNameChangeHandler}
						onBlur={lastNameBlurHandler}
					/>
					{lastNameInputHasError && <p className='error-text'>Please enter a last name.</p>}
			</div>
		</div>
		<div className={emailInputClasses}>
			<label htmlFor='name'>E-Mail Address</label>
				<input
					type='email'
					id='email'
					value={enteredEmail}
					onChange={emailChangeHandler}
					onBlur={emailBlurHandler}
				/>
				{emailHasError && <p className='error-text'>Please enter valid email address.</p>}
		</div>
		<div className='form-actions'>
			<button disabled={!formIsValid}>Submit</button>
		</div>
		</form>
	);
};

export default BasicForm;
