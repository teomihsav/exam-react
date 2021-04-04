
import { useLayoutEffect } from 'react'
import JobsFront from '../JobsFront'

import './About.css'

const About = ({ user }) => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <div className='about'>
            <h2 style={{ borderBottom: '3px solid #cbf8c0', display: 'inline-block' }} >Our Mission </h2>
            <br />
            <br />
            <p>
                Helping professional instructors to be accessible, <br />
            affordable, convenient - so anyone who struggles with how to start his sport life can get help, <br />
            anytime, anywhere.
            </p>
            <div style={{margin: '50px'}}>
                {!user && <JobsFront />}
            </div>
        </div>
    )
}

export default About
