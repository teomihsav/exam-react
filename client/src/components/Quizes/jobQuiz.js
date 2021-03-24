

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


                <div className='form-control-out-border-quiz-jobs' id="jobChoiceOne">
                    <label><h2>Your field at sport</h2></label>

                    <div className='form-control-out-border-quiz-jobs' >
                        <input
                            type="radio"
                            checked={values.jobChoiceOne === 'Rehabilitation'}
                            name="jobChoiceOne"
                            value='Rehabilitation'
                            onChange={onValueChange}
                        />
                        <label> Rehabilitation</label>
                    </div>

                    <div className='form-control-out-border-quiz-jobs'>
                        <input
                            type="radio"
                            checked={values.jobChoiceOne === 'Fitness/Body building'}
                            name="jobChoiceOne"
                            value='Fitness/Body building'
                            onChange={onValueChange}
                        />
                        <label> Fitness/Body building instructor</label>
                    </div>

                    <div className='form-control-out-border-quiz-jobs'>
                        <input
                            type="radio"
                            checked={values.jobChoiceOne === 'Nature hickung/cicling'}
                            name="jobChoiceOne"
                            value='Nature hickung/cicling'
                            onChange={onValueChange}
                        />
                        <label> Nature hickung/cicling events</label>
                    </div>

                    <span className='error'>{errors.email}</span>
                </div>

                <div className='form-control-out-border-quiz-jobs' id="jobChoiceTwo">
                    <label><h2> Are you traning with pro atlets</h2></label>

                    <div className='form-control-out-border-quiz-jobs'>
                        <input
                            type="radio"
                            checked={values.jobChoiceTwo === 'Pro atlets and regular people'}
                            name="jobChoiceTwo"
                            value='Pro atlets and regular people'
                            onChange={onValueChange}
                        />
                        <label> Pro atlets and regular people </label>
                    </div>

                    <div className='form-control-out-border-quiz-jobs'>
                        <input
                            type="radio"
                            checked={values.jobChoiceTwo === 'Just regular people'}
                            name="jobChoiceTwo"
                            value='Just regular people'
                            onChange={onValueChange}
                        />
                        <label> Just regular people </label>
                    </div>

                    <div className='form-control-out-border-quiz-jobs'>
                        <input
                            type="radio"
                            checked={values.jobChoiceTwo === 'Just pro atlets'}
                            name="jobChoiceTwo"
                            value='Just pro atlets'
                            onChange={onValueChange}
                        />
                        <label> Just pro atlets </label>
                    </div>

                    <span className='error'>{errors.email}</span>
                </div>

                <div className='form-control-out-border-quiz-jobs' id="jobChoiceThree">
                    <label><h2> What sport education/certificates do you have  </h2> </label>
                    <div className='form-control-out-border-quiz-jobs'>
                        <input
                            type="radio"
                            checked={values.jobChoiceThree === 'Magister/Bacalar degree'}
                            name="jobChoiceThree"
                            value='Magister/Bacalar degree'
                            onChange={onValueChange}
                        />
                        <label> Magister/Bacalar degree </label>
                    </div>

                    <div className='form-control-out-border-quiz-jobs'>
                        <input
                            type="radio"
                            checked={values.jobChoiceThree === 'Certificates'}
                            name="jobChoiceThree"
                            value='Certificates'
                            onChange={onValueChange}
                        />
                        <label> Certificates </label>
                    </div>

                    <div className='form-control-out-border-quiz-jobs'>
                        <input
                            type="radio"
                            checked={values.jobChoiceThree === 'Organizing sport events'}
                            name="jobChoiceThree"
                            value='Organizing sport events'
                            onChange={onValueChange}
                        />
                        <label> Organizing sport events hicking/cicling </label>
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

