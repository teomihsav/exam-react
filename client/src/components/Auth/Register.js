
import { useState, useEffect, useLayoutEffect } from 'react'
import { registerUser, loginUser } from '../../actions/authAction'
import { isEmpty, isBodyFieldEmpty } from '../../validation/authValidationRegister'
import { useHistory } from "react-router-dom";
import { useEffectValidationOnEvent } from '../../validation/authValidationRegisterOnEvent'
import { connect } from 'react-redux'

const Register = ({ props, isLogged, state }) => {

    const [values, setValues] = useState({})
    const [errors, setErrors] = useState({})
    const [registered, setRegistered] = useState(false)

    let typeUser = ''; let dataRadioForm = ''; let coords = Number

    let history = useHistory();
    history.location.state && (typeUser = history.location.state.typeUser)
    history.location.state && (dataRadioForm = history.location.state.data)
    history.location.state && (coords = history.location.state.coords)

    // console.log('Type User from History: ', history.location.state.typeUser)
    // console.log('Data from History: ', history.location.state.data)
    // console.log('Data from History Coords: ', history.location.state.coords)

    useEffectValidationOnEvent(values, setErrors) // Vallidation on Front on every type event -> useEffect

    useEffect(() => {
        registered && loginUser({ values, setErrors, isLogged })

        console.log('Type User from History - 02: ', typeUser)
        console.log('Logged: ', state)

        if (typeUser === 'clients') {
            state && history.push({
                pathname: "/start",
                state: {
                    data: dataRadioForm
                },
                myProps: {
                    title: "Last look at your answers and submit"
                }
            })
        } else if (typeUser === 'jobs') {
            state && history.push({
                pathname: "/startjobs",
                state: {
                    data: dataRadioForm,
                    coords: coords
                },
                myProps: {
                    title: "Last look at your answers and submit"
                }
            })
        }

    }, [registered])

    const spreadFormData = (e) => {
        setValues(values => ({ ...values, [e.target.name]: e.target.value })); // form entries to state
    }
    // SUBMIT FORM <--- 
    const onSubmit = (e) => {
        e.preventDefault()

        isBodyFieldEmpty(values, errors) // Check on Front for empty field on Submit and return errors object

        setErrors({ ...errors }) // Spread errors to state for displaying into form page -> console.log('Spread Errors object to State', errors)

        if (!isEmpty(errors).includes(true)) { // console.log('--> ', errors)

            registerUser({ values, setErrors, setRegistered, typeUser }) // User register call ~registerUser
        }
    }

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    })

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
                            onChange={spreadFormData}
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
                            onChange={spreadFormData}
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
                            onChange={spreadFormData}
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
                            onChange={spreadFormData}
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

const matStateToProps = (state) => ({
    auth: state.auth
})

export default connect(matStateToProps, { registerUser })(Register)
