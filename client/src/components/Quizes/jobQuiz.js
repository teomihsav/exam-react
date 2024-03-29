

import { useState, useEffect } from 'react'
import { saveJobsAswers, takeJobsAnswersToEdit, takeCoordsIfDbHas } from '../../actions/jobAction'
import { isEmpty, isRadioFormEmpty } from '../../validation/RadioFormValidation'
import { useHistory } from "react-router-dom"
import MapContainer from '../GoogleMap/MapContainer'

import { connect } from 'react-redux'
import { CLICKED_DISPATCH } from '../../actions/types'
import { COORDS_DISPATCH } from '../../actions/types'

const Media = ({ onChange, values }) => {
    return (
        <div className='form-control'>
            <label >Image of you</label>
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

const JobQuiz = (props) => {

    let dataRadioForm = {}
    let coordsFromForm = {}

    let history = useHistory()

    if (history.location.state !== undefined) {
        dataRadioForm = history.location.state.data[0]
        coordsFromForm = history.location.state.coords
        if (dataRadioForm) {
            console.log('Data from History: ', dataRadioForm)
            console.log('Coords: ', history.location.state.coords)
        }
    }
    console.log('Coords from Form:', coordsFromForm)
    const [values, setValues] = useState({ ...dataRadioForm })
    const [errors, setErrors] = useState({})
    const [coords, setCoords] = useState({ ...coordsFromForm })

    let typeUser = 'jobs'
    let coordsFromDB = {}
    let radioChoices = []

    useEffect(() => {
        if (history.location.myProps && history.location.myProps.title === 'Editing this answers will change chosen clients for you') {
            takeJobsAnswersToEdit({ setValues })

        }
    }, [])
    console.log('Values from JobQuiz:', values)
    useEffect(() => { // console.log('State :', values)
        radioChoices.push(values) // console.log('Array: ', radioChoices)
    }, [values])

    useEffect(() => {
        errors === 200 && history.push("/profile")
        props.dispatch({
            type: CLICKED_DISPATCH,
            payLoad: Number(4)
        })
    }, [errors])

    useEffect(() => {
        props.dispatch({
            type: COORDS_DISPATCH,
            payCoords: {
                lat: values.lat,
                lng: values.lng
            }
        })

    }, [values.lat])
    
    const onValueChange = (e) => {
        setValues(values => ({ ...values, [e.target.name]: e.target.value })) // console.log('After value set: ', values)
    }

    const formSubmit = (e) => {
        e.preventDefault()

        isRadioFormEmpty(values, errors)

        setErrors({ ...errors })

        if (!isEmpty(errors).includes(true)) {
            if (props.auth.isAuthenticated) {
                saveJobsAswers({ values, coords, setErrors })
                console.log('From ...', errors)
            } else {
                history.push({
                    pathname: "/register",
                    state: {
                        typeUser: typeUser,
                        data: radioChoices,
                        coords: coords
                    }
                })
            }
        }
    }

    return (
        <div>
            <h1>{history.location.myProps && history.location.myProps.title}</h1> <br />
            <form className='add-form' onSubmit={formSubmit}>
                <div className='row-profiles'>
                    <div className="column-profile">
                        <div className='form-control-out-border-quiz-jobs-out' id="one">
                            <label><h2>Your field at sport</h2></label>

                            <div className='form-control-out-border-quiz-jobs' >
                                <label className='label-radio-job'>
                                    <input className='input-radio-job'
                                        type="radio"
                                        checked={values.one === 'Nature hickung or cicling'}
                                        name="one"
                                        value='Nature hickung or cicling'
                                        onChange={onValueChange}
                                    />
                                    Nature hicking or cicling
                                 </label>
                            </div>

                            <div className='form-control-out-border-quiz-jobs'>
                                <label className='label-radio-job'>
                                    <input className='input-radio-job'
                                        type="radio"
                                        checked={values.one === 'Fitness or Body building'}
                                        name="one"
                                        value='Fitness or Body building'
                                        onChange={onValueChange}
                                    />
                                    Fitness or Body building
                                </label>
                            </div>

                            <div className='form-control-out-border-quiz-jobs'>
                                <label className='label-radio-job'>
                                    <input className='input-radio-job'
                                        type="radio"
                                        checked={values.one === 'Rehabilitation or Healing'}
                                        name="one"
                                        value='Rehabilitation or Healing'
                                        onChange={onValueChange}
                                    />
                                     Rehabilitation or Healing
                                 </label>
                            </div>
                            <span className='error'>{errors.profileAlreadyDone}</span>
                        </div>
                    </div>

                    <div className="column-profile">
                        <div className='form-control-out-border-quiz-jobs-out' id="two">
                            <label><h2> Are you traning with pro atlets</h2></label>

                            <div className='form-control-out-border-quiz-jobs'>
                                <label className='label-radio-job'>
                                    <input className='input-radio-job'
                                        type="radio"
                                        checked={values.two === 'Just regular people'}
                                        name="two"
                                        value='Just regular people'
                                        onChange={onValueChange}
                                    />
                                Just regular people
                                </label>
                            </div>

                            <div className='form-control-out-border-quiz-jobs'>
                                <label className='label-radio-job'>
                                    <input className='input-radio-job'
                                        type="radio"
                                        checked={values.two === 'Pro atlets and regular people'}
                                        name="two"
                                        value='Pro atlets and regular people'
                                        onChange={onValueChange}
                                    />
                                 Pro atlets and regular people
                                 </label>
                            </div>

                            <div className='form-control-out-border-quiz-jobs'>
                                <label className='label-radio-job'>
                                    <input className='input-radio-job'
                                        type="radio"
                                        checked={values.two === 'Just pro atlets'}
                                        name="two"
                                        value='Just pro atlets'
                                        onChange={onValueChange}
                                    />
                                 Just pro atlets
                                 </label>
                            </div>
                            <span className='error'>{errors.profileAlreadyDone}</span>
                        </div>
                    </div>

                    <div className="column-profile">
                        <div className='form-control-out-border-quiz-jobs-out' id="three">
                            <label><h2> What sport education/certificates do you have  </h2> </label>
                            <div className='form-control-out-border-quiz-jobs'>
                                <label className='label-radio-job'>
                                    <input className='input-radio-job'
                                        type="radio"
                                        checked={values.three === 'Organizing sport events hicking or cicling'}
                                        name="three"
                                        value='Organizing sport events hicking or cicling'
                                        onChange={onValueChange}
                                    />
                                    Organizing sport events hicking or cicling
                                 </label>
                            </div>

                            <div className='form-control-out-border-quiz-jobs'>
                                <label className='label-radio-job'>
                                    <input className='input-radio-job'
                                        type="radio"
                                        checked={values.three === 'Certificates'}
                                        name="three"
                                        value='Certificates'
                                        onChange={onValueChange}
                                    />
                                    Certificates
                                 </label>
                            </div>

                            <div className='form-control-out-border-quiz-jobs'>
                                <label className='label-radio-job'>
                                    <input className='input-radio-job'
                                        type="radio"
                                        checked={values.three === 'Magister or Bacalar'}
                                        name="three"
                                        value='Magister or Bacalar'
                                        onChange={onValueChange}
                                    />
                                    Magister or Bacalar
                                 </label>
                            </div>
                            <span className='error'>{errors.profileAlreadyDone}</span>
                        </div>
                    </div>
                </div>
                <br />

                <h4 style={{ borderBottom: '2px solid rgba(56, 151, 1, 0.925)', display: 'inline-block', marginBottom: '10px' }} >
                    If marked location is not accurate drag the marker to your location
                </h4>

                <MapContainer setCoords={setCoords} />

                <Media onChange={onValueChange} values={values} errors={errors} />

                <button className="btn btn-block" type="submit">
                    Submit
                </button>
            </form>

        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    menu: state.menu,
    coordinats: state.coordinats
})
export default connect(mapStateToProps)(JobQuiz)

