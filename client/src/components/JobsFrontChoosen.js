


import React, { lazy, Suspense } from 'react';
import { takeJobsToFront } from '../actions/jobAction'
import { useState, useEffect } from 'react'
import './CSS/JobDisplayOnFront.css'
import ViewerJobs from './ViewerJobs'

const JobsFrontChoosen = ({ arr }) => {

    console.log('Data from Jobs Front:', arr)

    const renderLoader = () => <p>Loading...</p>

    return (

        <div className="row">
            {
                // (Object.keys(arr).length > 0)
                // &&
                arr.map(el =>
                    <Suspense fallback={renderLoader()}>
                        <ViewerJobs
                            key={el._id}
                            username={el.username}
                            jobOne={el.one}
                            jobTwo={el.two}
                            jobThree={el.three}
                            image={el.image}
                            emailJob={el.client.email}
                        />
                    </Suspense>
                )
            }
        </div>
    )
}

export default JobsFrontChoosen