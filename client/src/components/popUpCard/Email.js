
import { sendEmail } from '../../actions/jobAction'
import { useState, useEffect } from 'react'

import { isEmpty, isBodyFieldEmpty } from '../../validation/authValidationEmailContactJob'

const styles = {
    card: { padding: 50, maxWidth: 800, margin: "0 auto 300px" },
    button: { display: "flex", marginLeft: "auto" }
};


const Email = ({ setOn, isOn, emailJob }) => {

    const [values, setValues] = useState({})
    const [errors, setErrors] = useState({})

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
            if (values.message.length < 5 || values.message.length > 80) {
                errors.message = 'Message must be more than 5 and less than 80 charecters';
            } else {
                errors.message = '';
            }
        }
        setErrors({ ...errors })

    }, [values.subject, values.message])

    const validForm = (e) => {
        setValues(values => ({ ...values, [e.target.name]: e.target.value }));
    }

    const onSubmit = (e) => {
        e.preventDefault()

        isBodyFieldEmpty(values, errors)
        setErrors({ ...errors });

        if (!isEmpty(errors, values).includes(true)) { // return array with true on element with error from the object errors/state

            sendEmail({ values, emailJob })
                .then(res => {
                    console.log('Email sent From SendEmail: ', res.data)
                    let status = { errMailConnect: 'E-mail is sent'}
                    setErrors(status)  
                })
                .catch(errors => {
                    if (errors.response) {
                        console.log('Email error: ', errors.response)
                        errors = { errMailConnect: 'E-mail is not sent'}
                        setErrors(errors)
                    }
                })
        }
    }

    return (
        <div className='card'>
            <form className='add-form' onSubmit={onSubmit} >
                <div className='form-control-out-border'>
                    <div className='form-control'>
                        <span className='info'>{errors.errMailConnect}</span>
                        <button type="button" className="btn-close" onClick={e => { setOn(!isOn) }} ><span aria-hidden="true" >&times;</span></button>
                        <label>Subject</label>
                        <input className={errors.subject ? 'form-control-border-error' : 'form-control-border'}
                            type='text'
                            name='subject'
                            value={values.subject || ''}
                            onChange={validForm}
                        >
                        </input>
                        <span className='error'>{errors.subject}</span>
                    </div>
                </div>

                <div className='form-control-out-border'>
                    <div className='form-control'>
                        <label>Message</label>
                        <textarea className={errors.message ? 'form-control-border-error' : 'form-control-border'}
                            rows='5'
                            cols='45'
                            name='message'
                            value={values.message || ''}
                            onChange={validForm}
                        >
                        </textarea>
                        <span className='error'>{errors.message}</span>
                    </div>
                </div>

                <input type='submit' value='Send E-mail' className='btn btn-block' />
            </form>
        </div>
    )
}

export default Email
