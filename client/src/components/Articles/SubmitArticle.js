
import { useState, useEffect, useLayoutEffect } from 'react'
import './index.css'
import { saveArticle, loadArticleForEdit } from '../../actions/jobAction'

import { useHistory } from "react-router-dom";

const SubmitArticle = ({ setReload }) => {

    let history = useHistory()

    const [values, setValues] = useState({})
    const [errors, setErrors] = useState({})
    const [status, setStatus] = useState({})
    const [loading, setLoading] = useState(false)

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    // history.location.myProps && console.log(history.location.myProps)

    useEffect(() => {
        if (history.location.myProps) {
            loadArticleForEdit(history.location.myProps && history.location.myProps) // Takes id: 'some id' from history, sent by MyArticle comp. with Link
                .then(profile => {
                    setValues(profile.data[0].articles[0]) // Data from choosen array/articel // console.log('loadArticleForEdit from Jobs ', profile.data[0].articles[0])
                })
                .catch(errors => {
                    if (errors.response) {
                        console.log('Error: ', errors.response.data)
                        setErrors(errors)
                    }
                })
        }
    }, [history.location.myProps])

    const validForm = (e) => {
        setValues(values => ({ ...values, [e.target.name]: e.target.value }))
        setStatus({})
        setErrors('')
    }

    const onSubmit = (e) => {
        e.preventDefault()

        setErrors('')
        setLoading(true)

        saveArticle({ values })
            .then(res => {
                console.log('Response API Save:', res.data) // .articles[0]._id
                setStatus({ info: 'Article is saved' })
                setValues('')
                setReload(res.data)
                setLoading(false)
            })
            .catch(errors => {
                if (errors.response) {
                    console.log('Error: ', errors.response.data)
                    setStatus({ info: <h5 style={{ color: "red" }}>Articles is not saved</h5> })
                    setErrors(errors.response.data)
                    setLoading(false)
                }
            })
    }
    const dots = <div className="col-sm-2"><div id="dots2"><span></span><span></span><span></span><span></span></div></div>
    const text = <div className='center-text-jobs'>{loading ? dots : status.info}</div>

    return (
        <div>
            <form className='add-form-mail' onSubmit={onSubmit} >
                <div className='form-control-out-border-jobs'>
                    <div className='form-control-jobs'>

                        {loading ? dots : text}
                        <br />
                        <label htmlFor='Choose Category'>Choose Categoty</label>
                        <select className='select-jobs-select'
                            name='category'
                            id='category'
                            value={values.category || ''}
                            onChange={validForm}
                        >
                            <option value='' > </option>
                            <option value='healthy' >Healthy eating</option>
                            <option value='exercices'>Exercices for beginners</option>
                        </select>
                        <span>{<h5 style={{ color: "red" }}>{errors.category}</h5>}</span>
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
                        <span>{<h5 style={{ color: "red" }}>{errors.title}</h5>}</span>
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
                        <span>{<h5 style={{ color: "red" }}>{errors.article}</h5>}</span>
                    </div>
                    <input type='submit' value='Submit Article' className='btn btn-block' />
                </div>
            </form>
        </div >
    )
}

export default SubmitArticle
