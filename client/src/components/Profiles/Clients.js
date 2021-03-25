

import JobsFront from '../JobsFront'
import '../CSS/ClientProfile.css'
import { takeJobsToFront } from '../../actions/jobAction'
import { useState, useEffect } from 'react'


const Clients = ({ data }) => {

        const [dataJob, setData] = useState({})

        useEffect(() => {
                takeJobsToFront({ setData })
        }, [])

        console.log('Clients -->', data)

        if (Object.keys(data) && Object.keys(dataJob) ) {
                console.log(data.AnswerOne.split('. ')[0])
                let one = data.AnswerOne.split('. ')[0]
                let two = data.AnswerTwo.split('. ')[0]
                let three = data.AnswerThree.split('. ')[0]

                console.log('Data from Jobs at Client:', dataJob)
                let oneJobs = dataJob.jobChoiceOne
console.log(oneJobs)
                if (one === '1') {
                }
        }

        return (
                <div>
                        <div className='control-out-border-single-client-profile'>

                                <div>
                                        Dear {data.username}, your answers are:
                                        <hr></hr>
                                        <p></p>
                                        <br />
                                        Walk during the day:
                                        <hr></hr>
                                        <p></p>
                                        <li> {data.AnswerOne} </li>
                                        <br />
                                        Streaching during the day:
                                        <hr></hr>

                                        <li> {data.AnswerTwo} </li>
                                        <br />

                                         Active sports like cicling, hicking, body bulid etc:
                                        <hr></hr>

                                        <li> {data.AnswerThree} </li>
                                        <br />

                                         We recommend you from your instructors:

                                </div>
                        </div>
                        <JobsFront />
                </div>
        )
}

export default Clients