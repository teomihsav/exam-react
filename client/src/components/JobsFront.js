


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

                    <h4 style={{ borderBottom: '2px solid rgba(56, 151, 1, 0.925)', display: 'inline-block', marginBottom: '10px' }} >{username}</h4>
                    <br />

                    <h4 style={{ borderBottom: '1px solid rgba(56, 151, 1, 0.925)', display: 'inline-block', marginBottom: '10px' }} >Specialized at:</h4>
                    <br />
                    <li>{jobOne}</li>
                    <li>{jobTwo}</li>
                    <li>{jobThree}</li>
                    <br />
                </div>
            </div >
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
        <div>
            <div className='control-out-border-in'>
                <div style={{ borderBottom: '3px solid #cbf8c0', display: 'inline-block', fontWeight: 'bold', fontSize: '16px' }}>
                    Here you can see part of our instructors
            </div>
            </div>
            <div className="row">
                {
                    (Object.keys(data).length > 0)
                    &&
                    data.sort(() => Math.random() - 0.5).slice(0, 5).map(el =>
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
        </div>
    )
}

export default JobsFront