


import axios from 'axios'
import jwt_decode from 'jwt-decode'

const isExpired = () => {

    var isExpired = false
    const token = localStorage.getItem('jwtToken')
    if (token) {
        let decoded = jwt_decode(token)
        let dateNow = new Date()
        // console.log('Date now  : ', Math.round(dateNow.getTime() / 1000))
        // console.log('Date token: ', decoded.exp)
        if (decoded.exp < Math.round(dateNow.getTime() / 1000)) {
            console.log('From Header -> Session expired!')
            localStorage.removeItem('jwtToken')
            return isExpired = true
        }
    }
}

const saveJobsAswers = ({ values, setErrors, setRegistered }) => {
    axios.post('http://localhost:5000/jobProfile/saveJobsAswers', { ...values })
        .then(res => {
            console.log('Response Status Answers: ', res.status)
            if (res.status === 200) {
                setErrors(res.status)
                // setRegistered(true)
            }
        })
        .catch(err => {
            if (err.response.data) {
                setErrors(err.response.data)
                console.log('Afer API response: ', err.response.data)
                //setErrors(err.response.data)
                // setRegistered(false)
            }
        })
}

const takeJobsAnswersToProfile = ({ setData }) => {
    axios.get('http://localhost:5000/jobProfile/takeAnswers')
        .then(res => {
            // console.log('Response Status Profile Answers: ', res.data)
            if (res.status === 200) {
                setData(res.data)
            }
        })
        .catch(err => {
            if (err.response) {
                console.log('Afer API response Profile Answers: ', err.response)
            }
        })
}
const takeJobsAnswersToEdit = ({ setValues }) => {
    axios.get('http://localhost:5000/jobProfile/takeAnswers')
        .then(res => {
            //  console.log('Response Status Profile Answers: ', res.data)
            if (res.status === 200) {
                setValues(res.data)
            }
        })
        .catch(err => {
            if (err.response) {
                console.log('Afer API response Profile Answers: ', err.response)
            }
        })
}

const takeJobsToFront = () => {
    return axios.get('http://localhost:5000/jobProfile/takeJobsToFront')
}
const takeJobsToFrontMatchedJobs = (id) => {
    return axios.post('http://localhost:5000/jobProfile/takeJobsToFrontMatchedJobs', (id))
}

const sendEmail = ({ values, emailJob, emailClient }) => {
    return axios.post('http://localhost:5000/jobProfile/sendEmail', ({ values, emailJob, emailClient }))
}
const saveArticle = ({ id, values }) => {
    return axios.post('http://localhost:5000/jobProfile/saveArticle', ({ id, values }))
}
const takeAllArticles = () => {
    return axios.get('http://localhost:5000/jobProfile/takeAllArticles')
}
const loadArticleForEdit = (id) => {
    return axios.post('http://localhost:5000/jobProfile/loadArticleForEdit', (id))
}
const takeJobsUserArticles = (id) => {
    return axios.post('http://localhost:5000/jobProfile/takeJobsUserArticles', (id))
}

export {
    saveJobsAswers,
    takeJobsAnswersToProfile,
    takeJobsAnswersToEdit,
    takeJobsToFront,
    takeJobsToFrontMatchedJobs,
    sendEmail,
    saveArticle,
    takeAllArticles,
    loadArticleForEdit,
    takeJobsUserArticles,
    isExpired
}