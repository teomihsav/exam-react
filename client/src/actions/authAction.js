

import axios from 'axios'
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken'
import { TEST_DISPATCH } from './types'

const registerUser = ({ values, setErrors, setRegistered, typeUser }) => { // console.log('TEST: ', values)
    axios.post('http://localhost:5000/auth/register', { ...values, typeUser })
        .then(res => {
            console.log('Response Status: ', res.status)
            if (res.status === 200) {
                setRegistered(true)
            }
        })
        .catch(err => {
            if (err.response) {
                setErrors(err.response.data)
                setRegistered(false)
            }
        })
}

const loginUser = ({ values, setErrors }) => dispatch => {
    axios.post('http://localhost:5000/auth/login', values)
        .then(res => {
            console.log(values)
            // Save to LocalStorage
            const { token } = res.data;
            if (token !== 'undefined') {
                // Set token to LocalStorage
                localStorage.setItem('jwtToken', token)
                // Set token to Auth header
                setAuthToken(token)
                // Decode token to get user data
                const decoded = jwt_decode(token)
                // isLogged(decoded.name)

                dispatch({
                    type: TEST_DISPATCH,
                    payAuth: true,
                    payUser: decoded.name,
                    payId: decoded.id,
                    payType: decoded.typeUser

                })
            }
        })
        .catch(err => {
            if (err.response) {
                setErrors(err.response.data)
                // isLogged(false)
            }
        })
}

const logoutUser = ({ isLogged }) => {
    // Remove token from localStorage
    localStorage.removeItem('jwtToken')
    isLogged(false)
    // Remove auth header for future requests
    setAuthToken(false)

}

export { registerUser, loginUser, logoutUser }