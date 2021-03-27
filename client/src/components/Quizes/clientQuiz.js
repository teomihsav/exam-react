

import { useState, useEffect } from 'react'
import { saveClientAnswers, takeClientsAnswersToEdit } from '../../actions/clientAction'
import { useHistory } from "react-router-dom"
import { isEmpty, isClientRadioFormEmpty } from '../../validation/clientRadioFormValidation'
import RadioClient from './RadioClient'

const ClientQuiz = ({ user }) => {

    let dataRadioForm = {}

    let history = useHistory()

    if (history.location.state !== undefined) {
        dataRadioForm = history.location.state.data[0]
        if (dataRadioForm) {
            console.log('Data from History: ', dataRadioForm)
        }
    }
    const [values, setValues] = useState({ ...dataRadioForm })
    const [errors, setErrors] = useState({})

    let typeUser = 'clients'

    let radioChoices = []

    useEffect(() => {
        if (history.location.myProps.title === 'Edit Profile') {
            takeClientsAnswersToEdit({ setValues })
        }
    }, [])

    useEffect(() => {
        console.log('State :', values)
        radioChoices.push(values)
        console.log('Array: ', radioChoices)
    }, [values])

    useEffect(() => {
        // (Object.keys(errors).length < 0) && history.push("/profile")
        console.log('UseEffect Error check', Object.keys(errors).length)
        console.log(errors)
        errors === 200 && history.push("/profile")
    }, [errors])

    const onValueChange = (e) => {

        setValues(values => ({ ...values, [e.target.name]: e.target.value })) // console.log('After value set: ', values)
    }

    const formSubmit = (e) => {
        e.preventDefault()

        isClientRadioFormEmpty(values, errors)

        setErrors({ ...errors })
        console.log(errors)

        if (!isEmpty(errors).includes(true)) {
            if (user) {
                console.log('Start: ', user)
                console.log('Start: ', values)
                console.log('Start: ', errors)
                saveClientAnswers({ values, setErrors })
                console.log('From ...', errors)
            } else {
                history.push({
                    pathname: "/register",
                    state: {
                        typeUser: typeUser,
                        data: radioChoices
                    }
                })
            }
        }
    }
    console.log('---> ', values.one)
    console.log('------> ', dataRadioForm.one)
    let compRadio = [
        { id: 1, checked: "{values.one === '1. 15 to 30 minutes'}", name: 'one', value: '1. 15 to 30 minutes' },
        { id: 2, checked: "{values.one === '1. 15 to 30 minutes'}", name: 'one', value: '1. 15 to 30 minutes' },
        { id: 3, checked: "{values.one === '1. 15 to 30 minutes'}", name: 'one', value: '1. 15 to 30 minutes' },
    ]
    return (
        <div>
            <h1>{history.location.myProps.title}</h1>
            <form className='add-form' onSubmit={formSubmit}>
                <div className='row-profiles'>
                    <div className="column-profile">
                        <div className='form-control-out-border-quiz' id="one">
                            <label><h2>  Walk during the day</h2></label>
                            <div className='form-control-out-border-quiz' >
                                <input
                                    type="radio"
                                    checked={values.one === '15 to 30 minutes'}
                                    name="one"
                                    value='15 to 30 minutes'
                                    onChange={onValueChange}
                                />
                                <label>  Do you walk 15 to 30 minutes during the day?</label>
                            </div>

                            <div className='form-control-out-border-quiz'>
                                <input type='radio'
                                    checked={values.one === '30 to 60 minutes'}
                                    name="one"
                                    value='30 to 60 minutes'
                                    onChange={onValueChange}
                                />
                                <label> Do you walk 30 to 60 minutes during the day?</label>
                            </div>

                            <div className='form-control-out-border-quiz'>
                                <input
                                    type="radio"
                                    checked={values.one === '1 hour and more'}
                                    name="one"
                                    value='1 hour and more'
                                    onChange={onValueChange}
                                />
                                <label> Do you walk 1 hour and more during the day?</label>
                            </div>

                            <span className='error'>{errors.profileAlreadyDone}</span>
                        </div>

                        <div className='form-control-out-border-quiz' id="two">
                            <label><h2>Streaching during the day</h2></label>

                            <div className='form-control-out-border-quiz'>
                                <input
                                    type="radio"
                                    checked={values.two === '15 to 30 minutes'}
                                    name="two"
                                    value={'15 to 30 minutes'}
                                    onChange={onValueChange}
                                />
                                <label> Do you strech 15 to 30 minutes during the day? </label>
                            </div>

                            <div className='form-control-out-border-quiz'>
                                <input
                                    type="radio"
                                    checked={values.two === '30 to 60 minutes'}
                                    name="two"
                                    value={'30 to 60 minutes'}
                                    onChange={onValueChange}
                                />
                                <label> Do you strech 30 to 60 minutes during the day? </label>
                            </div>

                            <div className='form-control-out-border-quiz'>
                                <input
                                    type="radio"
                                    checked={values.two === '1 hour and more'}
                                    name="two"
                                    value={'1 hour and more'}
                                    onChange={onValueChange}
                                />
                                <label> Do you strech 1 hour and more during the day? </label>
                            </div>

                            <span className='error'>{errors.profileAlreadyDone}</span>
                        </div>

                        <div className='form-control-out-border-quiz' id="three">
                            <label><h2>Active sports like cicling, hicking, body bulid etc.</h2> </label>
                            <div className='form-control-out-border-quiz'>
                                <input
                                    type="radio"
                                    checked={values.three === '15 to 30 minutes'}
                                    name="three"
                                    value={'15 to 30 minutes'}
                                    onChange={onValueChange}
                                />
                                <label> Do you have active sports 15 to 30 minutes during the day? </label>
                            </div>

                            <div className='form-control-out-border-quiz'>
                                <input
                                    type="radio"
                                    checked={values.three === '30 to 60 minutes'}
                                    name="three"
                                    value={'30 to 60 minutes'}
                                    onChange={onValueChange}
                                />
                                <label> Do you have active sports 30 to 60 minutes during the day? </label>
                            </div>

                            <div className='form-control-out-border-quiz'>
                                <input
                                    type="radio"
                                    checked={values.three === '1 hour and more'}
                                    name="three"
                                    value={'1 hour and more'}
                                    onChange={onValueChange}
                                />
                                <label> Do you have active sports 1 hour and more during the day? </label>
                            </div>
                            <span className='error'>{errors.profileAlreadyDone}</span>
                        </div>
                    </div>
                </div>
                <br />
                <button className="btn-client btn-block" type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default ClientQuiz