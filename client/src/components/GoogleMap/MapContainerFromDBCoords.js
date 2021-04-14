


import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useState } from 'react'

export const MapContainerFromDBCoords = ({ coordsData }) => {

    const [selected, setSelected] = useState({});

console.log('Coords from MapDB: ', coordsData)

    const onSelect = item => {
        setSelected(item);
    }

    const mapStyles = {
        height: "15vh",
        width: "100%"
    }

    const defaultCenter = {
        lat: 42.6977, lng: 23.3219
    }

    return (
        <LoadScript
            googleMapsApiKey='...'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={10}
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