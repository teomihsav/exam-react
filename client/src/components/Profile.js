

import React from 'react'

const Profile = ({ user }) => {

    console.log('logged: ', user)

    return (
        <div>
            Profile of {user}
        </div>
    )
}

export default Profile
