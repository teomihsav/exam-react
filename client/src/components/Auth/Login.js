

import { useState, useEffect, useLayoutEffect } from 'react'
import { loginUser } from '../../actions/authAction'
import { isEmpty, isBodyFieldEmpty } from '../../validation/authValidationLogin'
import { useHistory } from "react-router-dom"
import { useEffectValidationOnEvent } from '../../validation/authValidationRegisterOnEvent'
import { connect } from 'react-redux'

const Login = (props) => {

    const [values, setValues] = useState({})
    const [errors, setErrors] = useState({})
    let history = useHistory();

    useEffectValidationOnEvent(values, setErrors) // Vallidation on Front on every type event -> useEffect

    // On "logged" stat changed to token id --> redirect  
    useEffect(() => {
        props.auth.isAuthenticated && history.push("/profile")
    }, [props.auth.isAuthenticated])


    const validForm = (e) => {
        setValues(values => ({ ...values, [e.target.name]: e.target.value }))
    }
    // SUBMIT FORM <---
    const onSubmit = (e) => {
        e.preventDefault();

        isBodyFieldEmpty(values, errors)

        setErrors({ ...errors })

        if (!isEmpty(errors, values).includes(true)) { // return array with true on element with error from the object errors/state

            props.loginUser({ values, setErrors })
            // console.log('State in Login : ', state)
        }
    }

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    // let state = store.getState()
    return (
        <div style={{ margin: '50px' }}>
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
                {
                    // auth.user
                }
                <input type='submit' value='Login' className='btn btn-block' />
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { loginUser })(Login)

