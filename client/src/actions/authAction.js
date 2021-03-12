


import axios from 'axios'

const registerUser = async  ({ values, setErrors, setToTrue }) => {
    console.log('TEST: ', values)
    axios.post('http://localhost:5000/auth/register', { ...values })
        .then(res => {
            console.log('Response Status: ', res.status)
            if (res.status === 200) {
                 setToTrue(true)
            }
        })
        .catch(err => {
            if (err.response) {
                setErrors(err.response.data)
                setToTrue(false)
            }
        })

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
}

export default registerUser