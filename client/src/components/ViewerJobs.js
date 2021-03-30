
import React, { useState } from "react";

import TooltipPopover from "./popUpCard/TooltipPopover";
import Portal from "./popUpCard/Portal";
import "./popUpCard/index.css";
import Email from './popUpCard/Email'

const ViewerJobs = ({ username, jobOne, jobTwo, jobThree, image, emailJob }) => {

    const [visible, setVisible] = useState(false)
    const [isOn, setOn] = useState(false); // toggles dropdown visibility
    const [coords, setCoords] = useState({}); // takes current button coordinates
    const btnRef = React.createRef();

    const updateTooltipCoords = (button) => {
        if (button) {
            const rect = button.getBoundingClientRect();
            setCoords({
                left: rect.x + rect.width / 0.85, // add half the width of the button for centering
                top: rect.y + window.scrollY // add scrollY offset, as soon as getBountingClientRect takes on screen coords
            });
        }
    };

    return (
        <div className="column">
            <div className='control-out-border-front'>

                <div className="card">
                    <img src={image} alt={username} width="50%" height="50%" />
                </div>

                <div className='control-out-border-in'>
                    {username}:
                    <hr />

                    Specializing at: {' '}<br /><br />
                    {jobOne}<br />
                    {jobTwo}<br />
                    {jobThree}<br />
                    <br />


                    <button className="btn-jobs-connect btn-block" ref={btnRef} onClick={e => { updateTooltipCoords(e.target); setOn(!isOn) }}>
                        Connect witn instructor
                    </button>
                    {isOn && (
                        <Portal>
                            <TooltipPopover
                                coords={coords}
                                updateTooltipCoords={() =>
                                    updateTooltipCoords(btnRef.current.buttonNode)
                                }
                            >
                                <div>
                                    <Email setOn={setOn} isOn={isOn} emailJob={emailJob}/>
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