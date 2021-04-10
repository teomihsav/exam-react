


import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState, useEffect } from 'react'

export const MapContainer = ({ setCoords, coordsFromDB }) => {

    console.log('MapContainer received coords: ', coordsFromDB)

    const [currentPosition, setCurrentPosition] = useState({});

    const success = position => {
        const currentPosition = {
            lat: Number(position.coords.latitude),
            lng: Number(position.coords.longitude)
        }
        setCurrentPosition(currentPosition)
    }

    useEffect(() => {
        console.log(coordsFromDB.lat)
        if (coordsFromDB.hasOwnProperty('lat') && coordsFromDB.lat) {
            console.log('Coords from DB will be set: ', coordsFromDB)
            const currentPosition = {
                lat: Number(coordsFromDB.lat),
                lng: Number(coordsFromDB.lng)
            }
            setCurrentPosition(currentPosition)
        } else {
            navigator.geolocation.getCurrentPosition(success)
        }
    }, [coordsFromDB.lat])

    const mapStyles = {
        height: "20vh",
        width: "100%"
    }

    const onMarkerDragEnd = (e) => {
        const lat = e.latLng.lat()
        const lng = e.latLng.lng()
        setCurrentPosition({ lat, lng })
    }

    console.log('Choosen coords: ', currentPosition)

    setCoords(values => ({ ...values }, currentPosition))

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