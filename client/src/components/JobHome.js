

import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom'


const JobHome = (props) => {

    const formSubmit = () => {

    }

    const onValueChange = () => {

    }

    const errors = {}

    return (
        <div className='form-control-out-border-home'>
            <h2 style={{ align : 'center' }}>We will keep it simple, just answer on few questions to describe your education level and certificates </h2>
            <br></br>
            <br></br>
            
            <Link className='text-logo-link' to='/startjobs'><button className='btn-home-jobs btn-block-home' >  Let's get start... </button></Link>
        </div>
    )
}

export default JobHome
