


import { COORDS_DISPATCH } from '../actions/types'

const initialState = {
    coords: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case COORDS_DISPATCH:
            return {
                ...state,
                coords: action.payCoords
            }
        default:
            return state
    }
}