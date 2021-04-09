

import React from 'react'

import { useHistory } from "react-router-dom";
import { useEffect } from 'react'
import setAuthToken from '../../actions/setAuthToken'

import { connect } from 'react-redux'

const Logout = (props) => {

    let history = useHistory();
    useEffect(() => {

        localStorage.removeItem('jwtToken')
        console.log('Logout state: ', props.auth.isAuthenticated)
        setAuthToken(false)

        if (!props.auth.isAuthenticated) { history.push('/') } // Redirect based on state -> true on registered user

    }, [props.auth.isAuthenticated])

    return (
        <div>

        </div>
    )
}
const mapStateToProps = (state) => ({
    auth: state.auth
})
export default connect(mapStateToProps, {})(Logout)
