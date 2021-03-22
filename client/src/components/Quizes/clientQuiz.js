

import { useState, useEffect } from 'react'
import { saveClientAnswers } from '../../actions/clientAction'
import { useHistory, Redirect } from "react-router-dom"
import CompRadio from './test'

const ClientQuiz = ({ user }) => {

    let dataRadioForm = {}

    let history = useHistory();

    if (history.location.state !== undefined) {
        dataRadioForm = history.location.state.data[0]
        if (dataRadioForm) {
            console.log('Data from History: ', dataRadioForm)
        }
    }

    const [values, setValues] = useState({ ...dataRadioForm })
    const [errors, setErrors] = useState({})
    let typeUser = 'clients'

    useEffect(() => {

    }, [])

    let radioChoices = []

    useEffect(() => {
        console.log('State :', values)
        radioChoices.push(values)
        console.log('Array: ', radioChoices)
    }, [values])

    const onValueChange = (e) => {

        setValues(values => ({ ...values, [e.target.name]: e.target.value })) // console.log('After value set: ', values)
    }

    const formSubmit = (e) => {
        e.preventDefault()
        if (user) {
            console.log('Start: ', user)
            console.log('Start: ', values)
            saveClientAnswers({ values, setErrors })
            history.push("/profile")
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
    console.log('---> ', values.AnswerOne)
    console.log('------> ', dataRadioForm.AnswerOne)

    return (
        <div>
            <p>Please answer on next questions:</p>
            <br></br>
            <form className='add-form' onSubmit={formSubmit}>

                <div className='form-control-out-border-quiz' id="contactChoice1">
                    <label><h2>  Walk during the day</h2></label>

                    <div className='form-control-out-border-quiz' >
                        <input
                            type="radio"
                            checked={values.AnswerOne === '1. 15 to 30 minutes'}
                            name="AnswerOne"
                            value='1. 15 to 30 minutes'
                            onChange={onValueChange}
                        />
                        <label>  Do you walk 15 to 30 minutes during the day?</label>
                    </div>

                    <div className='form-control-out-border-quiz'>
                        <input type='radio'
                            checked={values.AnswerOne === '2. 30 to 60 minutes'}
                            name="AnswerOne"
                            value='2. 30 to 60 minutes'
                            onChange={onValueChange}
                        />
                        <label> Do you walk 30 to 60 minutes during the day?</label>
                    </div>

                    <div className='form-control-out-border-quiz'>
                        <input
                            type="radio"
                            checked={values.AnswerOne === '3. 1 hour and more'}
                            name="AnswerOne"
                            value='3. 1 hour and more'
                            onChange={onValueChange}
                        />
                        <label> Do you walk 1 hour and more during the day?</label>
                    </div>

                    <span className='error'>{errors.profileAlreadyDone}</span>
                </div>

                <div className='form-control-out-border-quiz' id="contactChoice2">
                    <label><h2>Streaching during the day</h2></label>

                    <div className='form-control-out-border-quiz'>
                        <input
                            type="radio"
                            checked={values.AnswerTwo === '1. 15 to 30 minutes'}
                            name="AnswerTwo"
                            value={'1. 15 to 30 minutes'}
                            onChange={onValueChange}
                        />
                        <label> Do you strech 15 to 30 minutes during the day? </label>
                    </div>

                    <div className='form-control-out-border-quiz'>
                        <input
                            type="radio"
                            checked={values.AnswerTwo === '2. 30 to 60 minutes'}
                            name="AnswerTwo"
                            value={'2. 30 to 60 minutes'}
                            onChange={onValueChange}
                        />
                        <label> Do you strech 30 to 60 minutes during the day? </label>
                    </div>

                    <div className='form-control-out-border-quiz'>
                        <input
                            type="radio"
                            checked={values.AnswerTwo === '3. 1 hour and more'}
                            name="AnswerTwo"
                            value={'3. 1 hour and more'}
                            onChange={onValueChange}
                        />
                        <label> Do you strech 1 hour and more during the day? </label>
                    </div>

                    <span className='error'>{errors.profileAlreadyDone}</span>
                </div>

                <div className='form-control-out-border-quiz' id="contactChoice3">
                    <label><h2>Active sports like cicling, hicking, body bulid etc.</h2> </label>
                    <div className='form-control-out-border-quiz'>
                        <input
                            type="radio"
                            checked={values.AnswerThree === '1. 15 to 30 minutes'}
                            name="AnswerThree"
                            value={'1. 15 to 30 minutes'}
                            onChange={onValueChange}
                        />
                        <label> Do you have active sports 15 to 30 minutes during the day? </label>
                    </div>

                    <div className='form-control-out-border-quiz'>
                        <input
                            type="radio"
                            checked={values.AnswerThree === '2. 30 to 60 minutes'}
                            name="AnswerThree"
                            value={'2. 30 to 60 minutes'}
                            onChange={onValueChange}
                        />
                        <label> Do you have active sports 30 to 60 minutes during the day? </label>
                    </div>

                    <div className='form-control-out-border-quiz'>
                        <input
                            type="radio"
                            checked={values.AnswerThree === '3. 1 hour and more'}
                            name="AnswerThree"
                            value={'3. 1 hour and more'}
                            onChange={onValueChange}
                        />
                        <label> Do you have active sports 1 hour and more during the day? </label>
                        <span className='error'>{errors.profileAlreadyDone}</span>
                    </div>
                </div>

                <br></br>

                <button className="btn btn-block" type="submit">
                    Submit
        </button>
            </form>
        </div>
    )
}

export default ClientQuiz