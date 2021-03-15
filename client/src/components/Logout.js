

import React from 'react'

import { logoutUser } from '../actions/authAction'
import { useHistory } from "react-router-dom";
import { useState, useEffect, useLayoutEffect } from 'react'
import setAuthToken from '../actions/setAuthToken'


const Logout = ({ isLogged, state }) => {

    let history = useHistory();

    useEffect(() => {
            
                localStorage.removeItem('jwtToken')
                isLogged(false)
                console.log('Logout: ', state)
                setAuthToken(false)

                if (!state) { history.push('/home') } // Redirect based on state -> true on registered user
        
    }, [state])

    



    return (
        <div>

        </div>
    )
}

export default Logout
