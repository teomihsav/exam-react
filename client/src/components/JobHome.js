

import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom'


const JobHome = (props) => {

    const errors = {}

    return (
        <div className='form-control-out-border-home'>
            <h1 >We will keep it simple,</h1> <br />
            <h2 style={{ align: 'center' }}>Just answer a few questions to describe your sport field of work, education level and certificates you have</h2>
            <br></br>
            <br></br>

            <Link className='text-logo-link'
                to={{
                    pathname: "/startjobs",
                    myProps: {
                        title: "Let's get start..."
                    }
                }} ><button className='btn-job' > Let's get start...  </button></Link>
            <br />
            <br />
            <h2><Link className='text-logo-link' to='/login'>
                <button className='btn-job-login' > If you are a registered users, click here to login in  </button>
            </Link></h2>
        </div>
    )
}

export default JobHome
