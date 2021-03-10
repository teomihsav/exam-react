
import { useState, useEffect, useLayoutEffect } from 'react'
import register from '../../actions/authAction'
const Register = ({ props }) => {

    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({})
    // const [errorUsername, setErrorUsername] = useState('')
    // const [errorEmail, setErrorEmail] = useState('')
    // const [errorPassword, setErrorPassword] = useState('')
    // const [errorPasswordSecond, setErrorPasswordSecond] = useState('')



    useEffect(() => { // console.log('useEffect:', username)
        let error = {}

        if (!values.username) {
            error.username = ''
            // setErrorUsername('');
        } else {
            if (values.username.length < 3) {
                //error.username = 'Username must be more than 3 charecters'); // console.log('plus: ', username.length)
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
        setErrors(error)

        if (!values.password) {
            error.password = ''
        } else {
            if (values.password.length < 6) {
                error.password = 'Password must be more than 6 charecters'; // console.log('plus: ', username.length)
            } else {
                error.password = ''; // console.log('minus: ', username, username.length)
            }
        }
        if (!values.passwordSecond) {
            error.passwordSecond = ''
        } else {
            if (values.passwordSecond.length < 6) {
                error.passwordSecond = 'Password must be more than 6 charecters'; // console.log('plus: ', username.length)
            } else {
                error.passwordSecond = ''; // console.log('minus: ', username, username.length)
                if (values.password !== values.passwordSecond) { (error.passwordSecond = 'Password did not match') }
            }
        }

    }, [values.username, values.email, values.password, values.passwordSecond])

    const validForm = (e) => { // console.log('Event: ', e)
        // e.persist();
        setValues(values => ({ ...values, [e.target.name]: e.target.value }));
        // setUsername(e) // console.log('Username after set state', username)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        console.log(Object.keys(errors))

        const isEmpty = (object) => {
            Object.values(object).forEach(element => {
                console.log(element)
              if (!element) {return false} else {return true}
            })
        }
console.log(isEmpty(errors))
        if (!isEmpty(errors)) {
            console.log('We can reg user')
            register({ ...values })
            // setText(''); setDay(''); setReminder(false);
        }
    }

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    console.log('Before:', errors)

    return (
        <>
            <form className='add-form' onSubmit={onSubmit} >
                <div style={{
                    'maxWidth': '450px',
                    'margin': '30px auto',
                    'overflow': 'auto',
                    'minHeight': '30px',
                    'border': '1px solid rgb(113, 110, 255)',
                    'padding': '20px',
                    'borderRadius': '5px'
                }}>
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

                <div style={{
                    'maxWidth': '450px',
                    'margin': '30px auto',
                    'overflow': 'auto',
                    'minHeight': '30px',
                    'border': '1px solid rgb(113, 110, 255)',
                    'padding': '20px',
                    'borderRadius': '5px'
                }}>
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
