


import React, { lazy, Suspense } from 'react';
import './CSS/JobDisplayOnFront.css'
import ViewerJobs from './ViewerJobs'

const JobsFrontChoosen = ({ arr, emailClient }) => {

    const renderLoader = () => <p>Loading...</p>

    return (
        <div>
            <div className="row">

                {
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
                                emailClient={emailClient}
                            />
                        </Suspense>
                    )
                }
            </div>
        </div>
    )
}

export default JobsFrontChoosen