


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

const JobsFront = ({ arr }) => {

    const [data, setData] = useState({})

    useEffect(() => {
        takeJobsToFront()
            .then(res => {
                setData(res.data)
                console.log('Data Jobs: ', res.data)
            })
            .catch(err => {
                if (err.response) {
                    console.log('Afer API response error: ', err.response)
                }
            })

    }, [])

    console.log('Data from Jobs Front:', data)

    return (
        <div className="row">
            {
                (Object.keys(data).length > 0)
                &&
                data.map(el =>
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

export default JobsFront