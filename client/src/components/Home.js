

import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom'


const Home = (props) => {

    const formSubmit = () => {

    }

    const onValueChange = () => {

    }

    const errors = {}

    return (
        <div className='form-control-out-border-home'>
            <h2 style={{ align : 'center' }}>We will keep it simple, just answer on few questions and we will help you to start your sport live </h2>
            <br></br>
            <br></br>
            
            <Link className='text-logo-link' to='/start'><button className='btn-home btn-block-home' >  Let's get start... </button></Link>
        </div>
    )
}

export default Home
