// // import React, { useState, useEffect } from 'react';
// // import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
// // import 'leaflet/dist/leaflet.css';
// // import L from 'leaflet';

// // // Custom icon for the marker (Leaflet requires explicit icon settings)
// // const markerIcon = new L.Icon({
// //     iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png', // Example marker icon URL
// //     iconSize: [25, 41],
// //     iconAnchor: [12, 41],
// //     popupAnchor: [1, -34],
// //     shadowSize: [41, 41],
// // });

// // const containerStyle = {
// //     width: '80%',
// //     height: '600px',
// //     margin: '0 auto',
// // };

// // const center = {
// //     lat: -3.745,
// //     lng: -38.523,
// // };

// // // Update the map center when the position changes
// // const UpdateMapCenter = ({ currentPosition }) => {
// //     const map = useMap();
// //     useEffect(() => {
// //         if (map && currentPosition) {
// //              map.remove()
// //             map.setView(currentPosition, map.getZoom());
// //         }
// //     }, [currentPosition, map]);
// //     return null;
// // };

// // const LiveTracking = () => {
// //     const [currentPosition, setCurrentPosition] = useState(center);

// //     useEffect(() => {
// //         const success = (position) => {
// //             const { latitude, longitude } = position.coords;
// //             setCurrentPosition({ lat: latitude, lng: longitude });
// //         };

// //         const error = (err) => {
// //             console.error("Error getting geolocation: ", err);
// //         };

// //         // Initial geolocation setup
// //         navigator.geolocation.getCurrentPosition(success, error);

// //         // Start watching for geolocation updates
// //         const watchId = navigator.geolocation.watchPosition(success, error);

// //         // Cleanup the watch on unmount
// //         return () => navigator.geolocation.clearWatch(watchId);
// //     }, []);

// //     // Only render the MapContainer when currentPosition is valid
// //     if (!currentPosition || !currentPosition.lat || !currentPosition.lng) {
// //         return <div>Loading map...</div>;
// //     }

// //     return (

// //         <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f9f9f9' }}>
// //             <MapContainer
// //                 center={currentPosition}
// //                 zoom={15}
// //                 style={containerStyle}
// //                 scrollWheelZoom={true}
// //             >
// //                 {/* OpenStreetMap tile layer */}
// //                 <TileLayer
// //                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// //                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// //                 />
// //                 <UpdateMapCenter currentPosition={currentPosition} />
// //                 <Marker position={currentPosition} icon={markerIcon}>
// //                     <Popup>Your current location</Popup>
// //                 </Marker>
// //             </MapContainer>
// //         </div>
// //     );
// // };

// // export default LiveTracking;



// import React, { useState, useEffect, useRef } from 'react';
// import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';
// import ErrorBoundary from './ErrorBoundary';

// // Custom icon for the marker
// const markerIcon = new L.Icon({
//     iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
//     iconSize: [25, 41],
//     iconAnchor: [12, 41],
//     popupAnchor: [1, -34],
//     shadowSize: [41, 41],
// });

// const containerStyle = {
//     width: '80%',
//     height: '600px',
//     margin: '0 auto',
// };

// const center = {
//     lat: -3.745,
//     lng: -38.523,
// };

// const LiveTracking = () => {
//     const [currentPosition, setCurrentPosition] = useState(center);
//     const mapRef = useRef(null);

//     useEffect(() => {
//         const success = (position) => {
//             const { latitude, longitude } = position.coords;
//             setCurrentPosition({ lat: latitude, lng: longitude });
//         };

//         const error = (err) => {
//             console.error("Error getting geolocation: ", err);
//         };

//         // Fetch initial geolocation
//         navigator.geolocation.getCurrentPosition(success, error);

//         // Start watching for geolocation updates
//         const watchId = navigator.geolocation.watchPosition(success, error);

//         // Cleanup the watch on unmount
//         return () => navigator.geolocation.clearWatch(watchId);
//     }, []);

//     // Ensure the map container is initialized once
//     useEffect(() => {
//         // Only re-render if position changes, don't initialize MapContainer again
//         if (mapRef.current) {
//             const map = mapRef.current;
//             if (map && map.getCenter() !== currentPosition) {
//                 map.setView(currentPosition, map.getZoom());
//             }
//         }
//     }, [currentPosition]);

//     if (!currentPosition || !currentPosition.lat || !currentPosition.lng) {
//         return <div>Loading map...</div>;
//     }

//     return (
//         <ErrorBoundary>
//                     <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f9f9f9' }}>
//             <MapContainer
//                 ref={mapRef} // Use ref to get the map instance
//                 center={currentPosition}
//                 zoom={15}
//                 style={containerStyle}
//                 scrollWheelZoom={true}
//                 whenCreated={map => mapRef.current = map} // Assign the map instance to mapRef on creation
//             >
//                 <TileLayer
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                 />
//                 <Marker position={currentPosition} icon={markerIcon}>
//                     <Popup>Your current location</Popup>
//                 </Marker>
//             </MapContainer>
//         </div>

//         </ErrorBoundary>

//     );
// };

// export default LiveTracking;


import React, { useEffect, useRef, useState } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Icon, Style } from 'ol/style';

const LiveTracking = () => {
    const mapRef = useRef(null);
    const [map, setMap] = useState(null);
    const [userLocation, setUserLocation] = useState(null);

    useEffect(() => {
        const initialMap = new Map({
            target: mapRef.current,
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            view: new View({
                center: fromLonLat([0, 0]), // Default center
                zoom: 2, // Default zoom level
            }),
        });

        setMap(initialMap);

        return () => {
            initialMap.setTarget(null);
        };
    }, []);

    useEffect(() => {
        if (map && userLocation) {
            map.getView().setCenter(fromLonLat([userLocation.lng, userLocation.lat]));
            map.getView().setZoom(14);
        }
    }, [map, userLocation]);

    useEffect(() => {
        const watchId = navigator.geolocation.watchPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setUserLocation({ lat: latitude, lng: longitude });
            },
            (error) => console.error('Error getting location:', error),
            { enableHighAccuracy: true, maximumAge: 0 }
        );

        return () => navigator.geolocation.clearWatch(watchId);
    }, []);

    useEffect(() => {
        if (map && userLocation) {
            const userLocationMarker = new Feature({
                geometry: new Point(fromLonLat([userLocation.lng, userLocation.lat])),
            });

            userLocationMarker.setStyle(
                new Style({
                    image: new Icon({
                        src: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
                        scale: 0.07,
                    }),
                })
            );

            const vectorSource = new VectorSource({
                features: [userLocationMarker],
            });

            const vectorLayer = new VectorLayer({
                source: vectorSource,
            });

            map.addLayer(vectorLayer);

            return () => map.removeLayer(vectorLayer);
        }
    }, [map, userLocation]);

    return (
        <div className="h-[60vh] w-full p-2 m-2 border-b" ref={mapRef}>
            {/* Map will render here */}
        </div>
    );
};

export default LiveTracking;
