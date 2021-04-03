

import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom'

import '../CSS/ClientProfile.css'
import { takeJobsToFront, takeJobsToFrontMatchedJobs } from '../../actions/jobAction'
import { useState, useEffect } from 'react'
import JobsFrontChoosen from '../JobsFrontChoosen'
import MapContainerFromDBCoords from '../../components/GoogleMap/MapContainerFromDBCoords'

const Clients = ({ data }) => {

        const calc = (data) => {
                let one = 0; let two = 0; let three = 0

                data.one === '15 to 30 minutes' && (one = 1)
                data.one === '30 to 60 minutes' && (one = 2)
                data.one === '1 hour and more' && (one = 3)

                data.two === '15 to 30 minutes' && (two = 1)
                data.two === '30 to 60 minutes' && (two = 2)
                data.two === '1 hour and more' && (two = 3)

                data.three === '15 to 30 minutes' && (three = 1)
                data.three === '30 to 60 minutes' && (three = 2)
                data.three === '1 hour and more' && (three = 3)

                return { one, two, three }
        }

        const calcForEach = (res) => {
                let oneJ = 0; let twoJ = 0; let threeJ = 0

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

                        let clientRes = res.one + res.two + res.three
                        let jobsRes = oneJ + twoJ + threeJ

                        if (jobsRes === clientRes) {
                                let id = el._id
                                takeJobsToFrontMatchedJobs({ id })
                                        .then(res => {
                                                console.log('Match Jobs Array', res.data)
                                                setdataJobsChoosen(dataJobsChoosen => [...dataJobsChoosen, res.data])
                                        })
                                        .catch(err => {
                                                if (err.response) {
                                                        console.log('Afer API response: ', err.response)
                                                }
                                        })
                        }
                })
        }

        const promiseA = new Promise((resolve, reject) => {
                resolve(calc(data))
        })

        const [dataJob, setData] = useState({})
        const [dataJobsChoosen, setdataJobsChoosen] = useState([])

        useEffect(() => {
                takeJobsToFront()
                        .then(res => {
                                setData(res.data)
                                console.log('State: ', test)
                                console.log('Data Jobs: ', res.data)
                        })
                        .catch(err => {
                                if (err.response) {
                                        console.log('Afer API response error: ', err.response)
                                }
                        })
        }, [])

        useEffect(() => {
                if (Object.keys(data) && dataJob.length) {

                        promiseA.then((res) => {
                                console.log('Promise A: ', res)

                                const promiseB = new Promise((resolve, reject) => {
                                        resolve(calcForEach(res))
                                })
                        })
                }
        }, [dataJob])

        console.log('Test: ', dataJobsChoosen)

        let coordsData = []

        dataJobsChoosen.map(el => {
                if (el.lat != undefined && el.lng != undefined) {
                        console.log(el.lat)
                        console.log(el.lng)
                        coordsData = [
                                {
                                        name: el.username,
                                        location: {
                                                lat: Number(el.lat),
                                                lng: Number(el.lng)
                                        }
                                }
                        ]
                }
        })
        const renderLoader = () => <p>Loading...</p>;

        return (
                <div>
                        <div className='control-out-border-single-client-profile'>
                                <div>
                                        <h2 style={{ borderBottom: '3px solid #ffae00', display: 'inline-block', marginBottom: '10px' }} >Dear {data.username}, your answers are:</h2>
                                        <br />

                                        <h4 style={{ borderBottom: '2px solid #ffae00', display: 'inline-block', marginBottom: '10px' }} >Walk during the day:</h4>
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
                                        <li> {data.client.email} </li>

                                         We recommend you from your instructors:

                                </div>
                                <Link className='text-logo-link'
                                        to={{
                                                pathname: "/start",
                                                myProps: {
                                                        title: 'Editing this answers will change chosen instructors for you'
                                                }
                                        }} ><button className='btn-home-client-edit' > Edit Profile </button></Link>
                                <div>


                                </div>
                        </div>
                        <br />

                        <div>
                                <h4 style={{ borderBottom: '1px solid #ffae00', display: 'inline-block', marginBottom: '5px' }} >
                                        Here on map you can see instructors location match by your daily habits
                                </h4>
                                <div className='control-out-border-client-map'>

                                        <MapContainerFromDBCoords coordsData={coordsData} />

                                </div>
                        </div>
                        <br />

                        <Suspense fallback={renderLoader()}>
                                <JobsFrontChoosen key={data.username} arr={dataJobsChoosen} emailClient={data.client.email} />
                        </Suspense>
                </div>
        )
}

export default Clients