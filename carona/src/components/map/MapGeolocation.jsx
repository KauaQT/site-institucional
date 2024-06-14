import 'mapbox-gl/dist/mapbox-gl.css';
import { Map, Marker } from 'react-map-gl'
import { useState } from 'react';

const TOKEN = process.env.REACT_APP_TOKEN;

function MapGeolocation({ markerPartida, markerDestino }) {
    
    const [viewInitial, setViewInitial] = useState({
        longitude: -46.5831203,
        latitude: -23.6323164,
        zoom: 9
    })

    return (
        <Map
            initialViewState={viewInitial}
            style={{ width: '100%', height: '100%', borderTopRightRadius: '10px', borderBottomRightRadius: '10px' }}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            mapboxAccessToken={TOKEN}

        >
            <Marker longitude={viewInitial.longitude} latitude={viewInitial.latitude} color='#173e6d' />
            {/* {markerPartida}
            {markerDestino} */}
        </Map>
        // <p>mapa</p>
    )
}

export default MapGeolocation