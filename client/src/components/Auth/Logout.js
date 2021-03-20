

import React from 'react'

import { useHistory } from "react-router-dom";
import { useEffect } from 'react'
import setAuthToken from '../../actions/setAuthToken'


const Logout = ({ isLogged, state }) => {

    let history = useHistory();
    useEffect(() => {

        localStorage.removeItem('jwtToken')
        isLogged(false)
        console.log('Logout state: ', state)
        setAuthToken(false)

        if (!state) { history.push('/') } // Redirect based on state -> true on registered user

    }, [state])

    return (
        <div>

        </div>
    )
}

export default Logout
