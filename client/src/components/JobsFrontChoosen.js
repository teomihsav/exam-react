


import { takeJobsToFront } from '../actions/jobAction'
import { useState, useEffect } from 'react'
import './CSS/JobDisplayOnFront.css'

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

const JobsFrontChoosen = ({ arr }) => {

    console.log('Data from Jobs Front:', arr)

    return (
        <div className="row">
            {
                (Object.keys(arr).length > 0)
                &&
                arr.map(el =>
                    <ViewerJobs
                        key={el._id}
                        username={el.username}
                        jobOne={el.one}
                        jobTwo={el.two}
                        jobThree={el.three}
                        image={el.image}

                    />

                )
            }

        </div>
    )
}

export default JobsFrontChoosen