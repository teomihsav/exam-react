

import React from 'react'

import { logoutUser } from '../actions/authAction'
import Home from './Home'


const Logout = ({ isLogged, logged }) => {

    logoutUser({ isLogged })

    return (
        <div>
   
        </div>
    )
}

export default Logout
