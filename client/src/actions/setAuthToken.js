

import store from '../store'
import { TEST_DISPATCH } from '../actions/types'
import { CLICKED_DISPATCH } from '../actions/types'

import axios from 'axios';

const setAuthToken = token => {
    if (token) {
        // Applay to every request
        axios.defaults.headers.common['Authorization'] = token
    } else {
        // Delete auth header
        store.dispatch({
            type: TEST_DISPATCH,
            payAuth: false,
            payUser: {}
        })
        store.dispatch({
            type: CLICKED_DISPATCH,
            payLoad: Number(0)
        })

        delete axios.defaults.headers.common['Authorization']

    }
}

export default setAuthToken