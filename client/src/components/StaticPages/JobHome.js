

import { Link } from 'react-router-dom'
import JobsFront from '../JobsFront'

import {connect} from 'react-redux'

const JobHome = (props) => {

    return (
        <div className='form-control-out-border-home'>
            <div style={{ borderBottom: '3px solid rgba(107, 185, 62, 0.925)', display: 'inline-block', fontSize: '38px', fontWeight: 'bold' }}>
                Start helping people,
            </div> <br />
            <h2 style={{ borderBottom: '3px solid rgba(107, 185, 62, 0.925)', display: 'inline-block' }}>
                Just answer a few questions to describe your sport field of work, education level and certificates you have.
            </h2>
            <br></br>
            <br></br>
            <Link className='text-logo-link'
                to={{
                    pathname: "/startjobs",
                    myProps: {
                        title: "Let's get start..."
                    }
                }}
            ><button className='btn-job' > Let's get start...  </button></Link>
            <br />
            <br />
            <div>
                <Link className='text-logo-link' to='/login'>
                    <button className='btn-job-login' > If you are a registered users, click here to log in  </button>
                </Link>
            </div>

            <div style={{ margin: '30px' }}>
                {!props.auth.isAuthenticated && <JobsFront />}
            </div>
        </div>
    )
}

const matStateToProps = (state) => ({
    auth: state.auth
})
export default connect(matStateToProps)(JobHome)
