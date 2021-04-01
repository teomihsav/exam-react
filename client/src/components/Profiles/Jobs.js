

import { Link } from 'react-router-dom'

import '../CSS/JobsProfile.css'
import { useState, useEffect } from 'react'
import { isEmpty, isBodyFieldEmptyArticle } from '../../validation/authValidationEmailContactJob'
import { saveArticle, loadArticleForEdit } from '../../actions/jobAction'
import MyArticles from '../Articles/MyArticles'
import { useHistory } from "react-router-dom";

const Jobs = ({id, data }) => {

        let history = useHistory()
console.log('id: ', id)
        const [values, setValues] = useState({})
        const [errors, setErrors] = useState({}) // console.log('Jobs -->', data)
        const [loading, setLoading] = useState(false)

        const validForm = (e) => {
                setValues(values => ({ ...values, [e.target.name]: e.target.value }));
                console.log(values)
        }

        history.location.myProps && console.log(history.location.myProps)

        useEffect(() => {

                if (history.location.myProps) {

                        history.location.myProps && console.log(history.location.myProps)
                        loadArticleForEdit(history.location.myProps && history.location.myProps)
                                .then(profile => {
                                        let status = { errMailConnect: 'Article is saved' }
                                        setValues(profile.data[0].articles[0])
                                        console.log('loadArticleForEdit from Jobs ', profile.data[0].articles[0])
                                })
                                .catch(errors => {
                                        if (errors.response) {
                                                console.log('Error: ', errors.response.data)
                                                errors = { errMailConnect: <h4 style={{ color: "red" }}>{errors.response.data.article}</h4> }
                                                setErrors(errors)
                                        }
                                })
                }
        }, [history.location.myProps])


        const onSubmit = (e) => {
                e.preventDefault()

                // isBodyFieldEmptyArticle(values, errors)
                setErrors({ ...errors })

                if (!isEmpty(errors, values).includes(true)) { // return array with true on element with error from the object errors/state
                        saveArticle({ values })
                                .then(res => {
                                        console.log('Response API Save:', res.data)
                                        let status = { errMailConnect: 'Article is saved' }
                                        setErrors(status)
                                })
                                .catch(errors => {
                                        if (errors.response) {
                                                console.log('Error: ', errors.response.data)
                                                errors = { errMailConnect: <h4 style={{ color: "red" }}>{errors.response.data.article}</h4> }
                                                setErrors(errors)
                                        }
                                })
                }
        }

        const dots = <div class="col-sm-2"><div id="dots2"><span></span><span></span><span></span><span></span></div></div>
        const text = <div className='center-text-jobs'>{loading ? dots : errors.errMailConnect}</div>

        return (
                <div className='row-single-job-profile'>
                        <div className='column-jobs-article'>
                                <form className='add-form' onSubmit={onSubmit} >
                                        <div className='form-control-out-border-jobs'>
                                                <div className='form-control-jobs'>

                                                        {loading ? dots : text}
                                                        <br />
                                                        <label htmlFor='Choose Category'>Choose Categoty</label>
                                                        <select className='select-jobs-select '
                                                                name='category'
                                                                id='category'
                                                                value={values.category || ''}
                                                                onChange={validForm}
                                                        >
                                                                <option value='' > </option>
                                                                <option value='healthy' >Healthy eating</option>
                                                                <option value='exercices'>Exercices for beginners</option>
                                                        </select>
                                                        <br />
                                                        <label>Title</label>
                                                        <br />
                                                        <input className='select-jobs-input'
                                                                type='text'
                                                                name='title'
                                                                value={values.title || ''}
                                                                onChange={validForm}
                                                        >
                                                        </input>
                                                        <br />
                                                        <label>Type your inspired words here</label>
                                                        <textarea className='select-jobs-text-area'
                                                                cols="36"
                                                                rows="56"
                                                                name='article'
                                                                value={values.article || ''}
                                                                onChange={validForm}
                                                        >
                                                        </textarea>
                                                </div>
                                                <input type='submit' value='Submit Article' className='btn btn-block' />
                                        </div>
                                </form>

                                <div className='column-jobs-article'>
                                        <MyArticles id={id}/>
                                </div>
                        </div>

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
                </div>
        )
}

export default Jobs