

import { Link } from 'react-router-dom'

const ClientHome = (props) => {

    const errors = {}

    return (
        <div className='form-control-out-border-home'>
            <div className='home-page-link'>
                <h1 style={{ align: 'center' }}>We will keep it simple, </h1> <br />
                <h2>just answer a few questions and we will help you to start your Sporty live... </h2>
                <br></br>
                <br></br>
            </div>

            <br></br>
            <Link className='text-logo-link'
                to={{
                    pathname: "start",
                    myProps: {
                        title: "Let's get start..."
                    }
                }}
            ><button className='btn-home btn-block-home' >  Let's get start... </button></Link>
            <br />
            <br />

            <div className='home-page-link'>
                <h2><Link className='text-logo-link' to='/login'> If you are a registered users, click here to login in </Link></h2>
            </div>
        </div>
    )
}

export default ClientHome
