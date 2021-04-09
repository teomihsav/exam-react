

import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { TEST_DISPATCH } from '../actions/types'
import store from '../store'


const refresh = () => {

    if (localStorage.getItem('jwtToken')) {
        const token = localStorage.getItem('jwtToken')
        setAuthToken(token);
        const decoded = jwt_decode(token)  // console.log('Decoded user: ', decoded.name)

        store.dispatch({
            type: TEST_DISPATCH,
            payAuth: true,
            payUser: decoded.name,
            payId: decoded.id,
            payType: decoded.typeUser
        })

    } else {
        localStorage.removeItem('jwtToken')
    }

}

export { refresh }