


import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useState } from 'react'

export const MapContainerFromDBCoords = ({ coordsData }) => {

    const [selected, setSelected] = useState({});

console.log('Coords from MapDB: ', coordsData)

    const onSelect = item => {
        setSelected(item);
    }

    // [
    //     {
    //         name: "Location 1",
    //         location: {
    //             lat: 41.3954,
    //             lng: 2.162
    //         },
    //     }
    // ]

    const mapStyles = {
        height: "15vh",
        width: "100%"
    }

    const defaultCenter = {
        lat: 42.6977, lng: 23.3219
    }

    return (
        <LoadScript
            googleMapsApiKey='AIzaSyCSoeiJCNbjWSEZtv6rezr3Jh7HjVgMzho'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}>

                {
                    coordsData.map(item => {
                        return (
                            <Marker key={item.name} position={item.location} />
                        )
                    })
                }

                {
                    coordsData.map(item => {
                        return (
                            <Marker key={item.name}
                                position={item.location}
                                onClick={() => onSelect(item)}
                            />
                        )
                    })
                }

                {
                    selected.location &&
                    (
                        <InfoWindow
                            position={selected.location}
                            clickable={true}
                            onCloseClick={() => setSelected({})}
                        >
                            <p>{selected.name}</p>
                        </InfoWindow>
                    )
                }

            </GoogleMap>
        </LoadScript>


    )
}

export default MapContainerFromDBCoords