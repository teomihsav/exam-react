

import { useState, useEffect } from 'react'
import { saveJobsAswers } from '../../actions/jobAction'
import { useHistory, Redirect } from "react-router-dom";

const Media = ({onChange, values}) => {
    return (
                <div className='form-control'>
                    <label>Image of you</label>
                    <input className='form-control-border'
                        type='text'
                        name='image'
                        placeholder='the link of your image'
                        value={values.image || ''}
                        onChange={onChange}
                    >
                    </input>
                </div>
    )
}

const JobQuiz = ({ user }) => {

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
    let typeUser = 'jobs'

    let radioChoices = []

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

        setErrors({ ...errors })
        console.log(errors)

        //if (!isEmpty(errors).includes(true)) {
        if (user) {
            saveJobsAswers({ values, setErrors })
        } else {
            history.push({
                pathname: "/register",
                state: {
                    typeUser: typeUser,
                    data: radioChoices
                }
            })
        }
        //}
    }

    return (

        <div>
            <p>Please answer on next questions:</p>
            <br></br>
            <form className='add-form' onSubmit={formSubmit}>


                <div className='form-control-out-border-quiz-jobs' id="one">
                    <label><h2>Your field at sport</h2></label>

                    <div className='form-control-out-border-quiz-jobs' >
                        <input
                            type="radio"
                            checked={values.one === 'Nature hickung or cicling'}
                            name="one"
                            value='Nature hickung or cicling'
                            onChange={onValueChange}
                        />
                        <label> Nature hickung or cicling</label>
                    </div>

                    <div className='form-control-out-border-quiz-jobs'>
                        <input
                            type="radio"
                            checked={values.one === 'Fitness or Body building'}
                            name="one"
                            value='Fitness or Body building'
                            onChange={onValueChange}
                        />
                        <label> Fitness or Body building</label>
                    </div>

                    <div className='form-control-out-border-quiz-jobs'>
                        <input
                            type="radio"
                            checked={values.one === 'Rehabilitation or Healing'}
                            name="one"
                            value='Rehabilitation or Healing'
                            onChange={onValueChange}
                        />
                        <label> Rehabilitation or Healing</label>
                    </div>

                    <span className='error'>{errors.email}</span>
                </div>

                <div className='form-control-out-border-quiz-jobs' id="two">
                    <label><h2> Are you traning with pro atlets</h2></label>

                    <div className='form-control-out-border-quiz-jobs'>
                        <input
                            type="radio"
                            checked={values.two === 'Just regular people'}
                            name="two"
                            value='Just regular people'
                            onChange={onValueChange}
                        />
                        <label> Just regular people </label>
                    </div>

                    <div className='form-control-out-border-quiz-jobs'>
                        <input
                            type="radio"
                            checked={values.two === 'Pro atlets and regular people'}
                            name="two"
                            value='Pro atlets and regular people'
                            onChange={onValueChange}
                        />
                        <label> Pro atlets and regular people </label>
                    </div>

                    <div className='form-control-out-border-quiz-jobs'>
                        <input
                            type="radio"
                            checked={values.two === 'Just pro atlets'}
                            name="two"
                            value='Just pro atlets'
                            onChange={onValueChange}
                        />
                        <label> Just pro atlets </label>
                    </div>

                    <span className='error'>{errors.email}</span>
                </div>

                <div className='form-control-out-border-quiz-jobs' id="three">
                    <label><h2> What sport education/certificates do you have  </h2> </label>
                    <div className='form-control-out-border-quiz-jobs'>
                        <input
                            type="radio"
                            checked={values.three === 'Organizing sport events hicking or cicling'}
                            name="three"
                            value='Organizing sport events hicking or cicling'
                            onChange={onValueChange}
                        />
                        <label> Organizing sport events hicking or cicling </label>
                    </div>

                    <div className='form-control-out-border-quiz-jobs'>
                        <input
                            type="radio"
                            checked={values.three === 'Certificates'}
                            name="three"
                            value='Certificates'
                            onChange={onValueChange}
                        />
                        <label> Certificates </label>
                    </div>

                    <div className='form-control-out-border-quiz-jobs'>
                        <input
                            type="radio"
                            checked={values.three === 'Magister or Bacalar'}
                            name="three"
                            value='Magister or Bacalar'
                            onChange={onValueChange}
                        />
                        <label> Magister or Bacalar </label>
                        <span className='error'>{errors.email}</span>
                    </div>
                </div>

                <br />
                <div>
                    < Media onChange={onValueChange} values={values}/>
                </div>
                <button className="btn btn-block" type="submit">
                    Submit
            </button>
            </form>
        </div>
    )
}

export default JobQuiz

