

import { useState, useEffect, useLayoutEffect } from 'react'
import { loginUser } from '../../actions/authAction'
import { isEmpty, isBodyFieldEmpty } from '../../validation/authValidationLogin'
import { useHistory } from "react-router-dom"

const Login = ({ isLogged, state }) => {

    const [values, setValues] = useState({})
    const [errors, setErrors] = useState({})
    let history = useHistory();

    useEffect(() => {
        let errors = {}

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
                errors.password = 'Password must be more than 6 charecters';
            } else {
                errors.password = '';
            }
        }
        setErrors(errors)
    }, [values.email, values.password])


    // On "logged" state changed to token id --> redirect  
    useEffect(() => { // console.log('State from Login: ', state)
        state && history.push("/profile")
    }, [state])


    const validForm = (e) => {
        setValues(values => ({ ...values, [e.target.name]: e.target.value }));
    }
    // SUBMIT FORM <---
    const onSubmit = (e) => {
        e.preventDefault();

        isBodyFieldEmpty(values, errors)

        setErrors({ ...errors });

        if (!isEmpty(errors, values).includes(true)) { // return array with true on element with error from the object errors/state
            
            loginUser({ values, setErrors, isLogged })
            console.log('State in Login : ', state)

        }
    }

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <>
            <form className='add-form' onSubmit={onSubmit} >
                <div className='form-control-out-border'>
                    <div className='form-control'>
                        <label>E-mail</label>
                        <input className={errors.email ? 'form-control-border-error' : 'form-control-border'}
                            type='text'
                            name='email'
                            placeholder='Type your email'
                            value={values.email || ''}
                            onChange={validForm}
                        >
                        </input>
                        <span className='error'>{errors.email}</span>
                    </div>
                </div>

                <div className='form-control-out-border'>
                    <div className='form-control'>
                        <label>Password</label>
                        <input className={errors.password ? 'form-control-border-error' : 'form-control-border'}
                            type='password'
                            name='password'
                            placeholder='Type your password'
                            value={values.password || ''}
                            onChange={validForm}
                        >
                        </input>
                        <span className='error'>{errors.password}</span>
                    </div>
                </div>

                <input type='submit' value='Login' className='btn btn-block' />
            </form>
        </>
    )
}

export default Login

