

import { Link } from 'react-router-dom'

import '../CSS/JobsProfile.css'
import { useState, useEffect } from 'react'
import { isEmpty, isBodyFieldEmptyArticle } from '../../validation/authValidationEmailContactJob'
import { saveArticle } from '../../actions/jobAction'

const Jobs = ({ data }) => {

        const [values, setValues] = useState({})
        const [errors, setErrors] = useState({}) // console.log('Jobs -->', data)
        const [loading, setLoading] = useState(false)

        const validForm = (e) => {
                setValues(values => ({ ...values, [e.target.name]: e.target.value }));
                console.log(values)
        }

        const onSubmit = (e) => {
                e.preventDefault()

                // isBodyFieldEmptyArticle(values, errors)
                setErrors({ ...errors })

                if (!isEmpty(errors, values).includes(true)) { // return array with true on element with error from the object errors/state
                        saveArticle({ values })
                                .then(res => {
                                        let status = { errMailConnect: 'Article is saved' }
                                        setErrors(status)
                                })
                                .catch(errors => {
                                        if (errors.response) {
                                                console.log('Error: ', errors.response)
                                                errors = { errMailConnect: <h4 style={{ color: "red" }}>Article is not saved</h4> }
                                                setErrors(errors)
                                        }
                                })
                }
        }

        const dots = <div class="col-sm-2"><div id="dots2"><span></span><span></span><span></span><span></span></div></div>
        const text = <div className='center-text-jobs'>{loading ? dots : errors.errMailConnect}</div>

        return (
                <div className='row-single-job-profile'>
                        <form className='add-form' onSubmit={onSubmit} >
                                <div className='form-control-out-border-jobs'>
                                        <div className='form-control'>

                                                {loading ? dots : text}

                                                <label htmlFor='Choose Category'>Choose Categoty</label>
                                                <div >
                                                        <select className='select-jobs'
                                                                name='category'
                                                                id='category'
                                                                onChange={validForm}
                                                        >
                                                                <option value=''> ... </option>
                                                                <option value='healthy'>Healthy eating</option>
                                                                <option value='exercices'>Exercices for beginners</option>
                                                        </select>
                                                </div>

                                                <label>Title</label>
                                                <input className='select-jobs'
                                                        type='text'
                                                        name='title'
                                                        value={values.title || ''}
                                                        onChange={validForm}
                                                >
                                                </input>
                                        </div>

                                        <label>Type your inspired words here</label>

                                        <div className='form-control'>
                                                <textarea className='select-jobs'
                                                        rows='36'
                                                        cols='56'
                                                        name='article'
                                                        value={values.article || ''}
                                                        onChange={validForm}
                                                >
                                                </textarea>
                                        </div>
                                </div>

                                <input type='submit' value='Submit Article' className='btn btn-block' />
                        </form>


                        <div className='control-out-border-single-job-profile'>

                                <div className="card-single-job-profile">
                                        <img src={data.image} alt={data.username} width="100%" height="100%" />

                                </div>
                                <div>
                                        Dear {data.username}, your answers are:
                                <br />
                                        <br />

                                 Your field at sport:
                        <hr></hr>
                                        <p></p>
                                        {data.one}
                                        <br />
                                        <br />

                                Are you traning with pro atlets:
                        <hr></hr>

                                        {data.two}
                                        <br />
                                        <br />

                                What sport education/certificates do you have:
                        <hr></hr>

                                        {data.three}
                                        <br />

                                </div>
                                <Link className='text-logo-link'
                                        to={{
                                                pathname: "/startjobs",
                                                myProps: {
                                                        title: 'Edit Profile'
                                                }
                                        }} > <button className='btn-home-jobs-edit ' > Edit Profile </button>
                                </Link>
                        </div>
                </div >

        )
}

export default Jobs