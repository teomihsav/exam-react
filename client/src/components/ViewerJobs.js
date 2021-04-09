
import React, { useEffect, useState } from "react";

import TooltipPopover from "./popUpCard/TooltipPopover";
import Portal from "./popUpCard/Portal";
import "./popUpCard/index.css";
import Email from './popUpCard/Email'

const ViewerJobs = ({ username, jobOne, jobTwo, jobThree, image, emailJob, emailClient, location }) => {

    const [isOn, setOn] = useState(false); // toggles dropdown visibility
    const [coordsLocal, setCoordsLocal] = useState({}); // takes current button coordinates
    const [email, setEmail] = useState(); // takes current button coordinates
    const btnRef = React.createRef();

    let emailsJob = []
    emailsJob.push(emailJob)

    const updateTooltipCoords = (button) => {
        if (button) {
            const rect = button.getBoundingClientRect();
            setCoordsLocal({
                left: rect.x + rect.width / 0.85, // add half the width of the button for centering
                top: rect.y + window.scrollY // add scrollY offset, as soon as getBountingClientRect takes on screen coords
            });
        }
    }

    useEffect(() => {
        setEmail(emailJob)
    }, [])

    return (
        <div  className="column">
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


                    <button className="btn-jobs-connect btn-block" ref={btnRef} onClick={e => { updateTooltipCoords(e.target); setOn(!isOn) }}>
                        Connect witn instructor
                    </button>
                    {isOn && (
                        <Portal>
                            <TooltipPopover
                                coordsLocal={coordsLocal}
                                updateTooltipCoords={() =>
                                    updateTooltipCoords(btnRef.current.buttonNode)
                                }
                            >
                                <div>
                                    <Email setOn={setOn} isOn={isOn} emailJob={email} emailClient={emailClient} />
                                </div>
                            </TooltipPopover>
                        </Portal>
                    )}

                </div>
            </div>
        </div>
    )
}

export default ViewerJobs