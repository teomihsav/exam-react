

import axios from 'axios'
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken'

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

const loginUser = ({ values, setErrors, isLogged }) => { // console.log('TEST: ', values)
    axios.post('http://localhost:5000/auth/login', { ...values })
        .then(res => {
            // console.log('Response Status: ', res.status)
            // if (res.status === 200) {
            // }
            // Save to LocalStorage
            const { token } = res.data;
            if (token !== 'undefined') {
                // Set token to LocalStorage
                localStorage.setItem('jwtToken', token);
                // Set token to Auth header
                setAuthToken(token);
                // Decode token to get user data
                 const decoded = jwt_decode(token);
                 isLogged(decoded.name)
            }
        })
        .catch(err => {
            if (err.response) {
                setErrors(err.response.data)
                isLogged(false)
            }
        })
}

const logoutUser = ({isLogged}) => {
    // Remove token from localStorage
    localStorage.removeItem('jwtToken')
    isLogged(false)
    // Remove auth header for future requests
    setAuthToken(false)

    //window.location.href = '/';
}

// function handleErrors(response) {
//     if (!response.ok) { throw response }
//     return response.json()
// }

// fetch('http://localhost:5000/auth/register', {
//     method: 'POST',
//     headers: {
//         'content-type': 'application/json'
//     },
//     body: JSON.stringify({ username, password }),
// })
//     .then(handleErrors)
//     .then(response => console.log("ok"))
//     .catch(error => console.log(error)

//     );


// const data = { ...values };

// fetch('http://localhost:5000/auth/register', {
//     method: 'POST', // or 'PUT'
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
// })
//     .then(result => {
//         if (!result.ok) throw result;
//         return result.json();
//     })
//     .then(result => {
//         console.log('Respons from DB', result);
//     }).catch(error => {

//          console.log('Error from Actions: ', error.response.data);
//         // error.json().then((body) => {
//         //     console.log('Respons from DB with E', body);
//              setErrors(error)
//         //})
//     })

export { registerUser, loginUser, logoutUser }