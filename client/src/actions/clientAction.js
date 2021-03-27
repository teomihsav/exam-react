


import axios from 'axios'
import jwt_decode from 'jwt-decode'

const isExpired = () => {

    var isExpired = false
    const token = localStorage.getItem('jwtToken')
    if (token) {
        let decoded = jwt_decode(token)
        let dateNow = new Date()
        console.log('Date now  : ', Math.round(dateNow.getTime() / 1000))
        console.log('Date token: ', decoded.exp)
        if (decoded.exp < Math.round(dateNow.getTime() / 1000)) {
            console.log('From Header -> Session expired!')
            localStorage.removeItem('jwtToken')
            return isExpired = true
        }
    }
}

const saveClientAnswers = ({ values, setErrors, setRegistered }) => {
    axios.post('http://localhost:5000/clientProfile/answers', { ...values })
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
                console.log('Afer API Error response: ', err.response.data)
                // setRegistered(false)
            }
        })
}

const takeClientsAnswersToEdit = ({ setValues }) => {
    axios.get('http://localhost:5000/clientProfile/takeAnswers')
        .then(res => {
            console.log('Response Status Profile Answers: ', res.data)
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

const takeClientAnswersToProfile = ({ setData }) => {
    axios.get('http://localhost:5000/clientProfile/takeAnswers')
        .then(res => {
            console.log('Response Status Profile Answers: ', res.data)
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

export { 
    saveClientAnswers, 
    takeClientAnswersToProfile, 
    takeClientsAnswersToEdit,
    isExpired }