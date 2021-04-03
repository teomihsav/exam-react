
import { useLayoutEffect } from 'react'
import MapContainer from './GoogleMap/MapContainer'

const About = () => {
    
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
    return (
        <div className='about'>
            <h1> Matching data - Version 1.0</h1>
            <MapContainer/>
        </div>
    )
}

export default About
