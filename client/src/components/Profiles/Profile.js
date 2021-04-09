

import { takeClientAnswersToProfile } from '../../actions/clientAction'
import { takeJobsAnswersToProfile } from '../../actions/jobAction'
import { useState, useEffect } from 'react'
import Clients from './Clients'
import Jobs from './Jobs'
import { connect } from 'react-redux'

const Profile = (props) => {
    console.log('Props: ', props)
    const typeUser = props.auth.typeUser
    const id = props.auth.id
    
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
                (typeUser === 'clients') && <Clients data={data} />
                ||
                (typeUser === 'jobs') && <Jobs id={id} data={data} />
            }
        </div>
    )
}
const setMapToProps = (state) => ({
    auth: state.auth
})
export default connect(setMapToProps)(Profile)
// export default Profile
