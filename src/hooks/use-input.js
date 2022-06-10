
import { useState, useReducer } from 'react'



const initialInputState = {
    value: '',
    isTouched: false
}


const inputStateReducer = (state, action) => {
    if (action.type === 'INPUT') {

    }
    if (action.type === 'BLUR') {
        
    }
    if (action.type === 'RESET') {
        
    }
    return inputStateReducer
}

const useInput = (validateValue) => {
    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState)


    const [enteredValue, setEnteredValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)

    const valueIsValid = validateValue(enteredValue)
	const hasError = !valueIsValid && isTouched


    const valueChangeHandler = event => {
		setEnteredValue(event.target.value)
	}

	const inputBlurHandler = event => {
		setIsTouched(true)
    }
    
    const reset = () => {
        setEnteredValue('')
        setIsTouched(false)
    }


    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    }

}

export default useInput