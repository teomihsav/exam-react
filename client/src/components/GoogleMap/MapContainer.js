


import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useState, useEffect } from 'react'

export const MapContainer = ({ setCoords }) => {

    const [currentPosition, setCurrentPosition] = useState({});

    const success = position => {
        const currentPosition = {
            lat: Number(position.coords.latitude),
            lng: Number(position.coords.longitude)
        }
        setCurrentPosition(currentPosition);
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success);
    }, [])

    const mapStyles = {
        height: "20vh",
        width: "100%"
    }

    const defaultCenter = {
        lat: 41.3851, lng: 2.1734
    }
    const onMarkerDragEnd = (e) => {
        const lat = e.latLng.lat();
        const lng = e.latLng.lng();
        setCurrentPosition({ lat, lng })
    }

    console.log('Coord: ', currentPosition)
    
    setCoords(values => ( {...values}, currentPosition ))
    // setValues(values => ({ ...values, [e.target.name]: e.target.value }))
    return (
        <LoadScript
            googleMapsApiKey='AIzaSyCSoeiJCNbjWSEZtv6rezr3Jh7HjVgMzho'>

            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={currentPosition}
            >

                {
                    currentPosition.lat ?
                        <Marker
                            position={currentPosition}
                            onDragEnd={(e) => onMarkerDragEnd(e)}
                            draggable={true} /> :
                        null
                }

            </GoogleMap>
        </LoadScript>


    )
}

export default MapContainer