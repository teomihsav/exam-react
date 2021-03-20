


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

const saveJobsAswers = ({ values, setErrors, setRegistered }) => {
    axios.post('http://localhost:5000/clientProfie/jobAnswers', { ...values })
        .then(res => {
            console.log('Response Status Answers: ', res.status)
            if (res.status === 200) {
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

export { saveJobsAswers, isExpired }