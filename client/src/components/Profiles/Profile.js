

import { React, Suspense, lazy } from 'react'
import { takeClientAnswersToProfile } from '../../actions/clientAction'
import { takeJobsAnswersToProfile } from '../../actions/jobAction'
import { useState, useEffect } from 'react'
import ClientHome from '../ClientHome'
import Clients from './Clients'
import Jobs from './Jobs'

const Profile = ({ user, typeUser }) => {

    const [data, setData] = useState({})

    useEffect(() => {
        if (typeUser === 'clients') {
            takeClientAnswersToProfile({ setData })
        }

        if (typeUser === 'jobs') {
            takeJobsAnswersToProfile({ setData })
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
                < Clients data={data} />
                ||
                (typeUser === 'jobs')
                &&
                < Jobs data={data} />
            }
        </div>
    )
}

export default Profile
