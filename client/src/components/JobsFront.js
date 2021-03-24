

import { takeJobsToFront } from '../actions/jobAction'
import { useState, useEffect } from 'react'
import './CSS/JobDisplayOnFront.css'

const ViewerJobs = ({ username, jobOne, jobTwo, jobThree, image }) => {

    return (
        <div class="column">
            <div className='control-out-border'>

                <div class="column">
                    <div class="card">
                        <img src={image} alt={username} width="100%" height="100%" />

                    </div>
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

const JobsFront = () => {

    const [data, setData] = useState({})

    useEffect(() => {
        takeJobsToFront({ setData })

        console.log('Data:', data)

    }, [])

    console.log('Data:', data)

    return (
        <div className="jobsFront">
            {

                (Object.keys(data).length > 0)
                &&
                data.map(el =>
                    <ViewerJobs
                        key={el.id}
                        username={el.username}
                        jobOne={el.jobChoiceOne}
                        jobTwo={el.jobChoiceTwo}
                        jobThree={el.jobChoiceThree}
                        image={el.image}

                    />
                )
            }

        </div>
    )
}

export default JobsFront
