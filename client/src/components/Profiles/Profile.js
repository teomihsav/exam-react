

import { React, Suspense, lazy } from 'react'
import { takeClientAnswersToProfile } from '../../actions/clientAction'
import { takeJobsAnswersToProfile } from '../../actions/jobAction'
import { useState, useEffect } from 'react'
import Home from '../Home'
import Clients from './Clients'
import Jobs from './Jobs'

const Profile = ({ user, typeUser }) => {

    const [data, setData] = useState({})
    const [test, setTest] = useState(false)

    useEffect(() => {
        if (typeUser === 'clients') {
            setTest(true)
            console.log('State: ', test)
            takeClientAnswersToProfile({ setData })
            setTest(true)
        }

        if (typeUser === 'jobs') {
            takeJobsAnswersToProfile({ setData })
        }
        return () => {
            setTest(false)
            console.log('State: ', test)
        }
    }, [])

    console.log('TypeUser Profile: ', typeUser)

    return (
        <div>
            {
                (Object.keys(data).length > 0)
                &&
                (typeUser === 'clients')
                &&
                < Clients data={data} setTest={setTest} test={test}/>
                ||
                (typeUser === 'jobs')
                &&
                < Jobs data={data} />
            }

        </div>
    )
}

export default Profile
