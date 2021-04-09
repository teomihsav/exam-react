

import { sendEmail } from '../../actions/jobAction'
import { useState, useEffect } from 'react'
import { isEmpty, isBodyFieldEmpty } from '../../validation/validationCommon'
import './index.css'

// const styles = {
//     card: { padding: 50, maxWidth: 800, margin: "0 auto 300px" },
//     button: { display: "flex", marginLeft: "auto" }
// };

const Email = ({ setOn, isOn, emailJob, emailClient }) => {

    const [values, setValues] = useState({})
    const [errors, setErrors] = useState({})
    const [status, setStatus] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        if (!values.subject) {
            !errors && (errors.subject = '')
        } else {
            if (values.subject.length < 3) {
                errors.subject = 'Subjet must be more than 3 charecters'
            } else {
                errors.subject = ''
            }
        }

        if (!values.message) {
            !errors && (errors.message = '')
        } else {
            if (values.message.length < 5 || values.message.length > 1000) {
                errors.message = 'Message must be more than 5 and less than 1000 charecters';
            } else {
                errors.message = '';
            }
        }
        setErrors({ ...errors })

    }, [values.subject, values.message, errors])

    const validForm = (e) => {
        setValues(values => ({ ...values, [e.target.name]: e.target.value }));
    }

    const onSubmit = (e) => {
        e.preventDefault()

        isBodyFieldEmpty(values, errors)
        setErrors({ ...errors })

        if (!isEmpty(errors, values).includes(true)) { // return array with true on element with error from the object errors/state

            setLoading(true)

            sendEmail({ values, emailJob, emailClient })
                .then(res => {
                    console.log('Email sent From SendEmail: ', res.data)
                    setStatus({ info: 'E-mail is sent' })
                    setLoading(false)
                })
                .catch(errors => {
                    if (errors.response) {
                        console.log('Email error: ', errors.response)
                        setStatus({ info: <h4 style={{ color: "red" }}>E-mail is not sent</h4> })
                        setErrors(errors.response.data)
                        setLoading(false)
                    }
                })
        }
    }
    const dots = <div class="col-sm-2"><div id="dots2"><span></span><span></span><span></span><span></span></div></div>
    const text = <div className='info'>{loading ? dots : status.info}</div>

    return (
        <div className=''>
            <form className='add-form-email' onSubmit={onSubmit} >
                <div className='form-control-out-border-email'>

                        <button type="button" className="btn-close" onClick={e => { setOn(!isOn) }} ><span aria-hidden="true" >&times;</span></button>

                        {loading ? dots : text} <br/>

                        <label>Subject</label>
                        <input className={errors.subject ? 'select-jobs-select-email-error' : 'select-jobs-select-email'}
                            type='text'
                            name='subject'
                            value={values.subject || ''}
                            onChange={validForm}
                        >
                        </input>
                        <span className='error'>{errors.subject}</span>
                </div>

                <div className='form-control-out-border-email'>
                        <label>Message to:</label><br/>
                        <span style={{ fontSize: '12px' }}>{emailJob}</span>
                        <textarea className={errors.message ? 'select-jobs-text-area-email-error' : 'select-jobs-text-area-email'}
                            rows='5'
                            cols='45'
                            name='message'
                            value={values.message || ''}
                            onChange={validForm}
                        >
                        </textarea>
                        <span className='error'>{errors.message}</span>
                    </div>

                <input type='submit' value='Send E-mail' className='btn btn-block' />
            </form>
        </div>
    )
}

export default Email
