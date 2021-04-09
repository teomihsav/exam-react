

import { connect } from 'react-redux'
import store from '../store'
import { TEST_DISPATCH } from '../actions/types'

import axios from 'axios';

const setAuthToken = token => {
    if (token) {
        console.log('Logout 01 : ')
        // Applay to every request
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        // Delete auth header
        store.dispatch({
            type: TEST_DISPATCH,
            payAuth: false,
            payUser: {}
        })
        console.log('Logout 02 : ')
        delete axios.defaults.headers.common['Authorization'];

    }
}

export default setAuthToken