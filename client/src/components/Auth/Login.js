

import { useState, useEffect, useLayoutEffect } from 'react'
import register from '../../actions/authAction'
import { isEmpty, isBodyFieldEmpty } from '../../validation/authValidation'

const Login = ({ props }) => {

    const [values, setValues] = useState({})
    const [errors, setErrors] = useState({})

    // CHECK ONCHANGE FORM ENTRIES <--
    useEffect(() => { // console.log('useEffect:', username)
        let error = {}
console.log('username from body: ',values.username)
        if (!values.username) {
            error.username = ''
        } else {
            if (values.username.length < 3) {
                error.username = 'Username must be more than 3 charecters'
            } else {
                error.username = '' // console.log('minus: ', username, username.length)
            }
        }
        if (!values.password) {
            error.password = ''
        } else {
            if (values.password.length < 6) {
                error.password = 'Password must be more than 6 charecters'; // console.log('plus: ', username.length)
            } else {
                error.password = ''; // console.log('minus: ', username, username.length)
            }
        }

        setErrors(error)

    }, [values.username, values.password])

    const validForm = (e) => { // console.log('Event: ', e)
        setValues(values => ({ ...values, [e.target.name]: e.target.value }));
    }
    // SUBMIT FORM <--- 
    const onSubmit = (e) => {
        e.preventDefault() // console.log(Object.keys(errors))

        isBodyFieldEmpty(values, errors)
        let res = Object.values(errors).map(el => {
            return el ? true : false
        })
        console.log(res)
        setErrors({ ...errors });

        if (!res.includes(true)) {
            if (!isEmpty(errors, values).includes(true)) { // return array with true on element with error from the object errors/state
                console.log('We can reg user')
                //register({ ...values })
            }
        }
    }

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }); // console.log('Before:', errors)

    return (
        <>
            <form className='add-form' onSubmit={onSubmit} >
                <div className='form-control-out-border'>
                    <div className='form-control'>
                        <label>Username</label>
                        <input className={errors.username ? 'form-control-border-error' : 'form-control-border'}
                            type='text'
                            name='username'
                            placeholder='Type your username'
                            value={values.username || ''}
                            // onChange={(e) => (setUsername(e.target.value), setErrorUsername(''))}
                            onChange={validForm}
                        >
                        </input>
                        <span className='error'>{errors.username}</span>
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

