


import { CLICKED_DISPATCH } from '../actions/types'

const initialState = {
    clicked: Number(0)
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CLICKED_DISPATCH:
            return {
                ...state,
                clicked: action.payLoad
            }
        default:
            return state
    }
}