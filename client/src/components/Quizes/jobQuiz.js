

import { useState, useEffect } from 'react'
import { saveJobsAswers } from '../../actions/jobAction'
import { useHistory, Redirect } from "react-router-dom";

const JobQuiz = ({ user }) => {

    const [values, setValues] = useState()
    const [errors, setErrors] = useState({})
    let typeUser = 'jobs'

    let history = useHistory();

    const formSubmit = (e) => {
        e.preventDefault()
        if (user) {
            console.log('Start: ', user)
            console.log('Start: ', values)
            saveJobsAswers({ values, setErrors })
            history.push("/profile")
        } else {
            // history.push("/register", { typeUser })
            // <Redirect to='/register'/>
            history.push({
                pathname:  "/register",
                state: {
                  data: typeUser 
                } 
             });
        }
    }

    const onValueChange = (e) => {
        setValues(values => ({ ...values, [e.target.name]: e.target.value }));
    }

    return (

        <div>
            <p>Please answer on next questions:</p>
            <br></br>
            <form className='add-form' onSubmit={formSubmit}>


                <div className='form-control-out-border-quiz-jobs' id="contactChoice1">
                    <label><h2>Your field at sport</h2></label>

                    <div className='form-control-out-border-quiz-jobs' > <input type="radio" name="contactChoice1" value={0} onChange={onValueChange} />
                        <label> Rehabilitation</label>
                    </div>

                    <div className='form-control-out-border-quiz-jobs'> <input type="radio" name="contactChoice1" value={1} onChange={onValueChange} />
                        <label> Fitness/Body building instructor</label>
                    </div>

                    <div className='form-control-out-border-quiz-jobs'> <input type="radio" name="contactChoice1" value={2} onChange={onValueChange} />
                        <label> Nature hickung/cicling events</label>
                    </div>

                    <span className='error'>{errors.email}</span>
                </div>

                <div className='form-control-out-border-quiz-jobs' id="contactChoice2">
                    <label><h2> Are you traning with pro atlets</h2></label>

                    <div className='form-control-out-border-quiz-jobs'> <input type="radio" name="contactChoice2" value={0} onChange={onValueChange} />
                        <label> Pro atlets and regular people </label>
                    </div>

                    <div className='form-control-out-border-quiz-jobs'> <input type="radio" name="contactChoice2" value={1} onChange={onValueChange} />
                        <label> Just regular people </label>
                    </div>

                    <div className='form-control-out-border-quiz-jobs'> <input type="radio" name="contactChoice2" value={2} onChange={onValueChange} />
                        <label> Just pro atlets </label>
                    </div>

                    <span className='error'>{errors.email}</span>
                </div>

                <div className='form-control-out-border-quiz-jobs' id="contactChoice3">
                    <label><h2> What sport education/certificates do you have  </h2> </label>
                    <div className='form-control-out-border-quiz-jobs'> <input type="radio" name="contactChoice3" value={0} onChange={onValueChange} />
                        <label> Magister/Bacalar degree </label>
                    </div>

                    <div className='form-control-out-border-quiz-jobs'> <input type="radio" name="contactChoice3" value={1} onChange={onValueChange} />
                        <label> Certificates </label>
                    </div>

                    <div className='form-control-out-border-quiz-jobs'> <input type="radio" name="contactChoice3" value={2} onChange={onValueChange} />
                        <label> Organizing sport events hicking/cicling </label>
                        <span className='error'>{errors.email}</span>
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

export default JobQuiz

