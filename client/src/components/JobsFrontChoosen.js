


import React, { lazy, Suspense } from 'react';
import './CSS/JobDisplayOnFront.css'
import ViewerJobs from './ViewerJobs'

const JobsFrontChoosen = ({ arr, emailClient }) => {

    const renderLoader = () => <p>Loading...</p>

    return (
        <div className="row">
            {
                arr.map(el =>
                    <Suspense fallback={renderLoader()}>
                        <ViewerJobs
                            key={Math.random().toString(36).substr(2, 9)}
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
    )
}

export default JobsFrontChoosen