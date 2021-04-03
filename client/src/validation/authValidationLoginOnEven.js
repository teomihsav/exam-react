


import { useEffect } from 'react'

export const useEffectValidationOnEvent = ({ ...values }, setErrors) => {

    useEffect(() => {

        if (!values.email) {
            errors.email = ''
        } else {
            if (!/\S+@\S+\.\S+/.test(values.email)) {
                errors.email = 'Must be valid e-mail'
            } else {
                errors.email = ''
            }
        }

        if (!values.password) {
            errors.password = ''
        } else {
            if (values.password.length < 6) {
                errors.password = 'Password must be more than 6 charecters';
            } else {
                errors.password = '';
            }
        }
        setErrors({ ...errors })
    }, [values.email, values.password])
}