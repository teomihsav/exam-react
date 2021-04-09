

import { Link } from 'react-router-dom'
import JobsFront from '../JobsFront'
import { connect } from 'react-redux'

const ClientHome = (props) => {

    console.log('Client Home: ', props.auth)

    return (
        <div className='form-control-out-border-home'>
            <div style={{ borderBottom: '3px solid rgba(255, 199, 95, 0.925)', display: 'inline-block', fontSize: '38px', fontWeight: 'bold' }}>
                Let's get start your sports life,
            </div> <br />
            <h2 style={{ borderBottom: '3px solid rgba(255, 199, 95, 0.925)', display: 'inline-block' }}>
                Just answer a few questions and we will help you to start your Sporty live...
            </h2>
            <br></br>
            <br></br>
            <Link className='text-logo-link'
                to={{
                    pathname: "start",
                    myProps: {
                        title: "Let's get start..."
                    }
                }}
            ><button className='btn-home' >  Let's get start... </button></Link>
            <br />
            <br />
            <div>
                <Link className='text-logo-link' to='/login'>
                    <button className='btn-home-login' >  If you are a registered users, click here to log in  </button>
                </Link>
            </div>

            <div style={{ margin: '30px' }}>
                {!props.auth.isAuthenticated && <JobsFront />}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
})
export default connect(mapStateToProps)(ClientHome)
