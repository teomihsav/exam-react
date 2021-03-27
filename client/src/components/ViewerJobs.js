

import { useState, useEffect } from 'react'

const ViewerJobs = ({ username, jobOne, jobTwo, jobThree, image }) => {

    return (
        <div className="column">
            <div className='control-out-border-front'>

                <div className="card">
                    <img src={image} alt={username} width="50%" height="50%" />
                </div>

                <div className='control-out-border-in'>
                    {username}:
                    <hr></hr>

                    Specializing at: {' '}<br /><br />
                    {jobOne}<br />
                    {jobTwo}<br />
                    {jobThree}<br />
                </div>
            </div>
        </div >
    )
}

export default ViewerJobs