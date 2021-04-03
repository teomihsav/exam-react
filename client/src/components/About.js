
import { useLayoutEffect } from 'react'
import MapContainer from './GoogleMap/MapContainer'

const About = () => {
    
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
    return (
        <div >
            <h1 style={{ borderBottom: '3px solid #cbf8c0', display: 'inline-block' }} > Here you can see instructors match by your daily habits </h1>
            <br/>
            <br/>
            <MapContainer/>
        </div>
    )
}

export default About
