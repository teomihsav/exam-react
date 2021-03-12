
import { useState, useEffect, useLayoutEffect } from 'react'
import registerUser from '../../actions/authAction'
import { isEmpty, isBodyFieldEmpty } from '../../validation/authValidationRegister'
import { useHistory } from "react-router-dom";

const Register = ({ props }) => {

    const [values, setValues] = useState({})
    const [errors, setErrors] = useState({})
    const [toTrue, setToTrue] = useState(false)
    let history = useHistory();

    // CHECK ONCHANGE FORM ENTRIES <--
    useEffect(() => { // console.log('useEffect:', username)
        let error = {}

        if (!values.username) {
            error.username = ''
        } else {
            if (values.username.length < 3) {
                error.username = 'Username must be more than 3 charecters'
            } else {
                error.username = '' // console.log('minus: ', username, username.length)
            }
        }

        if (!values.email) {
            error['email'] = ''
        } else {
            if (!/\S+@\S+\.\S+/.test(values.email)) {
                // setErrorEmail('Must be valid e-mail'); // console.log('plus: ', username.length)
                error.email = 'Must be valid e-mail'
            } else {
                error['email'] = ''; // console.log('minus: ', username, username.length)
            }
        } // console.log('After IFs', error)


        if (!values.password) {
            error.password = ''
        } else {
            if (values.password.length < 1) {
                error.password = 'Password must be more than 6 charecters'; // console.log('plus: ', username.length)
            } else {
                error.password = ''; // console.log('minus: ', username, username.length)
            }
        }
        if (!values.passwordSecond) {
            error.passwordSecond = ''
        } else {
            if (values.passwordSecond.length < 1) {
                error.passwordSecond = 'Password must be more than 6 charecters'; // console.log('plus: ', username.length)
            } else {
                error.passwordSecond = ''; // console.log('minus: ', username, username.length)
                if (values.password !== values.passwordSecond) { (error.passwordSecond = 'Password did not match') }
            }
        }

        setErrors(error) // Setting object with errors to state errors 

    }, [values.username, values.email, values.password, values.passwordSecond])

    useEffect(() => {
        console.log('toTrue', toTrue)
         // setToTrue(!Boolean)
            console.log('HITTTTED:', toTrue)
            toTrue && history.push("/login")
    }, [toTrue])

    const validForm = (e) => { // console.log('Event: ', e)
        setValues(values => ({ ...values, [e.target.name]: e.target.value }));
    }
    // SUBMIT FORM <--- 
    const onSubmit = (e) => {
        e.preventDefault() // console.log(Object.keys(errors))

        isBodyFieldEmpty(values, errors)
        let result = Object.values(errors).map(el => {
            return el ? true : false
        })
        setErrors({ ...errors });

        if (!result.includes(true)) {
            if (!isEmpty(errors, values).includes(true)) { // return array with true on element with error from the object errors/state
                registerUser({ values, setErrors, setToTrue })
                    .then(() => {


                    })
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
                    <div className='form-control'>
                        <label>E-mail</label>
                        <input className={errors.email ? 'form-control-border-error' : 'form-control-border'}
                            type='text'
                            name='email'
                            placeholder='Type your e-mail'
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

                    <div className='form-control'>
                        <input className={errors.passwordSecond ? 'form-control-border-error' : 'form-control-border'}
                            type='password'
                            name='passwordSecond'
                            placeholder='Type password again'
                            value={values.passwordSecond || ''}
                            onChange={validForm}
                        >
                        </input>
                        <span className='error'>{errors.passwordSecond}</span>
                    </div>
                </div>

                <input type='submit' value='Register' className='btn btn-block' />
            </form>
        </>
    )
}

export default Register
