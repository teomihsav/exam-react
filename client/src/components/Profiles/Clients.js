

import React, { lazy, Suspense } from 'react';

import '../CSS/ClientProfile.css'
import { takeJobsToFront, takeJobsToFrontMatchedJobs } from '../../actions/jobAction'
import { useState, useEffect } from 'react'
import JobsFrontChoosen from '../JobsFrontChoosen'

const Clients = ({ data, setTest, test }) => {

        const [dataJob, setData] = useState({})
        const [dataJobsChoosen, setdataJobsChoosen] = useState([])

        let arrChoosenJobs = []

        useEffect(() => {
                takeJobsToFront()
                        .then(res => {
                                setData(res.data)
                                setTest(true)
                                console.log('State: ', test)
                                //console.log('Data Jobs: ', res.data[0])
                        })
                        .catch(err => {
                                if (err.response) {
                                        console.log('Afer API response error: ', err.response)
                                }
                        })

                if (Object.keys(data) && dataJob.length) {

                        let one = 0; let two = 0; let three = 0
                        let oneJ = 0; let twoJ = 0; let threeJ = 0

                        data.one === '15 to 30 minutes' && (one = 1)
                        data.one === '30 to 60 minutes' && (one = 2)
                        data.one === '1 hour and more' && (one = 3)

                        data.two === '15 to 30 minutes' && (two = 1)
                        data.two === '30 to 60 minutes' && (two = 2)
                        data.two === '1 hour and more' && (two = 3)

                        data.three === '15 to 30 minutes' && (three = 1)
                        data.three === '30 to 60 minutes' && (three = 2)
                        data.three === '1 hour and more' && (three = 3)

                        console.log(dataJob[0].one, dataJob[0].two, dataJob[0].three)
                        dataJob.forEach(el => {
                                el.one === 'Nature hickung or cicling' && (oneJ = 1)
                                el.one === 'Fitness or Body building' && (oneJ = 2)
                                el.one === 'Rehabilitation or Healing' && (oneJ = 3)

                                el.two === 'Just regular people' && (twoJ = 1)
                                el.two === 'Pro atlets and regular people' && (twoJ = 2)
                                el.two === 'Just pro atlets' && (twoJ = 3)

                                el.three === 'Organizing sport events hicking or cicling' && (threeJ = 1)
                                el.three === 'Certificates' && (threeJ = 2)
                                el.three === 'Magister or Bacalar' && (threeJ = 3)

                                console.log('Data from client at Client:', one, two, three)
                                console.log('Data from Jobs at Client:', oneJ, twoJ, threeJ)

                                let clientRes = one + two + three
                                let jobsRes = oneJ + twoJ + threeJ

                                if (jobsRes === clientRes) {
                                        // console.log('Choosen: ', arrChoosenJobs.push(el.client))
                                        console.log('Choosen: ', el._id)
                                        let id = el._id
                                        takeJobsToFrontMatchedJobs({ id })
                                                .then(res => {
                                                        console.log('Response Status Answers: ', res.status)
                                                        if (res.status === 200) {
                                                                console.log('Data from Api: ', res.data)
                                                                arrChoosenJobs.push(res.data)
                                                        }
                                                })
                                                .catch(err => {
                                                        if (err.response) {
                                                                console.log('Afer API response: ', err.response)
                                                        }
                                                })
                                }
                        })
                        setdataJobsChoosen(arrChoosenJobs)
                        console.log('Array: ', arrChoosenJobs)
                }
                // return () => {
                //         setTest(true)
                // }

        }, [test])

        const renderLoader = () => <p>Loading...</p>;

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
                                        <li> {data.one} </li>
                                        <br />
                                        Streaching during the day:
                                        <hr></hr>

                                        <li> {data.two} </li>
                                        <br />

                                         Active sports like cicling, hicking, body bulid etc:
                                        <hr></hr>

                                        <li> {data.three} </li>
                                        <br />

                                         We recommend you from your instructors:

                                </div>
                        </div>

                        <Suspense fallback={renderLoader()}>
                                < JobsFrontChoosen arr={dataJobsChoosen} setTest={setTest} test={test} />
                        </Suspense>
                </div>
        )
}

export default Clients