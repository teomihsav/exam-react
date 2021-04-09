


import { TEST_DISPATCH } from '../actions/types'

const initialState = {
    isAuthenticated: false,
    user: '',
    id: '',
    typeUser: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TEST_DISPATCH:
            return {
                ...state,
                isAuthenticated: action.payAuth,
                user: action.payUser,
                id: action.payId,
                typeUser: action.payType
            }
        default:
            return state
    }
}
