


import { useEffect } from 'react'

export const useEffectValidationOnEvent = ({ ...values }, setErrors) => {

    useEffect(() => {
        let errors = {}

        if (!values.username) {
            errors.username = ''
        } else {
            if (values.username.length < 3) {
                errors.username = 'Username must be more than 3 charecters.'
            } else {
                errors.username = '' 
            }
        }

        if (!values.email) {
            errors.email = ''
        } else {
            if (!/\S+@\S+\.\S+/.test(values.email)) {
                errors.email = 'Must be valid e-mail.'
            } else {
                errors.email = ''
            }
        } 

        if (!values.password) {
            errors.password = ''
        } else {
            if (values.password.length < 6) {
                errors.password = 'Password must be more than 6 charecters.'; 
            } else {
                errors.password = ''; 
            }
        }
        
        if (!values.passwordSecond) {
            errors.passwordSecond = ''
        } else {
            if (values.passwordSecond.length < 6) {
                errors.passwordSecond = 'Password must be more than 6 charecters.'; 
            } else {
                errors.passwordSecond = ''; 
                if (values.password !== values.passwordSecond) { (errors.passwordSecond = 'Password did not match.') }
            }
        }

        setErrors(errors) // Setting object with errors to state errors 

    }, [values.username, values.email, values.password, values.passwordSecond])
}