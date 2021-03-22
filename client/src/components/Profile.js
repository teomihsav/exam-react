

import { React, Suspense, lazy } from 'react'
import { takeClientAnswersToProfile } from '../actions/clientAction'
import { useState, useEffect } from 'react'
import Home from './Home'


const Test = ({ data }) => {

    // let history = useHistory();

    // useEffect(() => {
    //     if (Object.keys(data).length > 0) {
    //         console.log('Display Data: ', Object.keys(data))
    //     } else {
    //         console.log('Redirect')
    //         history.push("/")
    //     }

    // }, [])

    return (
        <div>
            Dear {data.username}, your answers are:
            <hr></hr>
            <p></p>
    Walk during the day:
            <hr></hr>
            <p></p>
            <li> {data.AnswerOne} </li>

    Streaching during the day:
            <hr></hr>

            <li> {data.AnswerTwo} </li>

    Active sports like cicling, hicking, body bulid etc:
            <hr></hr>

            <li> {data.AnswerThree} </li>

    We recommend you to:
            <hr></hr>
        </div>
    )
}

const Profile = ({ user, typeUser }) => {

    const [data, setData] = useState({ client: 'f' })
    
    useEffect(() => {
        takeClientAnswersToProfile({ setData })
        return () => {
            takeClientAnswersToProfile({ setData })
        }
    }, [])

    console.log('Logged: ', data)

    // if (data == {}) { code = data && <Test data={data} /> } else { code = <Test data={data} /> }

    console.log('TypeUser: ', typeUser)

    return (
        <div>
            {(Object.keys(data).length > 0) && <Test data={data} />}
            {(Object.keys(data).length <= 0) && <Home />}
        </div>
    )
}

export default Profile
