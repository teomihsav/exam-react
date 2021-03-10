
import axios from 'axios'

    const register = ({ username, password }) => {
        axios.post('http://localhost:5000/auth/register', { username, password })
            .then(res => {
                if (res.status === 200) {
                    //console.log('You just registered a user!')
                    console.log(res)
                }
            })
        }

     export default register