


import { TEST_DISPATCH } from '../actions/types'

const initialState = {
    isAuthenticated: false,
    user: 'TestUser'
}

export default function (state = initialState, action) {
    switch (action.type) {
        case TEST_DISPATCH:
            return {
                ...state,
                isAuthenticated: action.payAuth,
                user: action.payload
            }
        default:
            return state
    }
}