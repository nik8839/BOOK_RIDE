// import React, { useRef, useState, useEffect, useContext } from 'react'
// import { Link } from 'react-router-dom'
// import CaptainDetails from '../components/CaptainDetails'
// import RidePopUp from '../components/RidePopUp'
// import { useGSAP } from '@gsap/react'
// import gsap from 'gsap'
// import ConfirmRidePopUp from '../components/ConfirmRidePopUp'
// import { SocketContext } from '../context/SocketContext'
// import { CaptainDataContext } from '../context/CaptainContext'
// import LiveTracking from '../components/LiveTracking'
// import axios from 'axios'

// const CaptainHome = () => {

//     const [ ridePopupPanel, setRidePopupPanel ] = useState(false)
//     const [ confirmRidePopupPanel, setConfirmRidePopupPanel ] = useState(false)

//     const ridePopupPanelRef = useRef(null)
//     const confirmRidePopupPanelRef = useRef(null)
//     const [ ride, setRide ] = useState(null)

//     const { socket } = useContext(SocketContext)
//     const { captain } = useContext(CaptainDataContext)

//     useEffect(() => {
//         socket.emit('join', {
//             userId: captain._id,
//             userType: 'captain'
//         })
//         const updateLocation = () => {
//             if (navigator.geolocation) {
//                 navigator.geolocation.getCurrentPosition(position => {
//                     socket.emit('update-location-captain', {
//                         userId: captain._id,
//                         location: {
//                             ltd: position.coords.latitude,
//                             lng: position.coords.longitude
//                         }
//                     })
//                 })
//             }
//         }

//         const locationInterval = setInterval(updateLocation, 10000)
//         updateLocation()

//         // return () => clearInterval(locationInterval)
//     }, [])

//     socket.on('new-ride', (data) => {
//         setRide(data)
//         setRidePopupPanel(true)
//     })

//     async function confirmRide() {
//         const response = await axios.post(`${process.env.REACT_APP_BACKENED_URL}/rides/confirm`, {
//             rideId: ride._id,
//             captainId: captain._id,
//         }, {
//             headers: {
//                 Authorization: `Bearer ${localStorage.getItem('captain-token')}`
//             }
//         })

//         setRidePopupPanel(false)
//         setConfirmRidePopupPanel(true)
//     }

//     useGSAP(function () {
//         if (ridePopupPanel) {
//             gsap.to(ridePopupPanelRef.current,  { y: 0 })
//         } else {
//             gsap.to(ridePopupPanelRef.current,  { y: "100%" })
//         }
//     }, [ridePopupPanel])

//     useGSAP(function () {
//         if (confirmRidePopupPanel) {
//             gsap.to(confirmRidePopupPanelRef.current,  { y: 0 })
//         } else {
//             gsap.to(confirmRidePopupPanelRef.current, { y: "100%" })
//         }
//     }, [confirmRidePopupPanel])

//     return (
//         <div className='h-screen'>

//             <div className="h-screen w-screen">
//                 {/* image for temporary use */}
//                 <LiveTracking />
                

//             </div>
//             <div className='h-1/3 md:h-2/4 p-6'>
//                 <CaptainDetails />
//             </div>
//             <div ref={ridePopupPanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-4 py-10 pt-14 md:px-10 md:py-16'>
//                 <RidePopUp
//                     ride={ride}
//                     setRidePopupPanel={setRidePopupPanel}
//                     setConfirmRidePopupPanel={setConfirmRidePopupPanel}
//                     confirmRide={confirmRide}
//                 />
//             </div>
//             <div ref={confirmRidePopupPanelRef} className='fixed w-full h-screen z-10 bottom-0 translate-y-full bg-white px-4 py-10 pt-14 md:px-10 md:py-16'>
//                 <ConfirmRidePopUp
//                     ride={ride}
//                     setConfirmRidePopupPanel={setConfirmRidePopupPanel}
//                     setRidePopupPanel={setRidePopupPanel}
//                 />
//             </div>
//         </div>
//     )
// }

// export default CaptainHome



import React, { useRef, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import CaptainDetails from '../components/CaptainDetails';
import RidePopUp from '../components/RidePopUp';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';
import { SocketContext } from '../context/SocketContext';
import { CaptainDataContext } from '../context/CaptainContext';
import LiveTracking from '../components/LiveTracking';
import axios from 'axios';

const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(false);
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);

  const ridePopupPanelRef = useRef(null);
  const confirmRidePopupPanelRef = useRef(null);
  const [ride, setRide] = useState(null);

  const { socket } = useContext(SocketContext);
  const { captain } = useContext(CaptainDataContext);

  useEffect(() => {
    socket.emit('join', {
      userId: captain._id,
      userType: 'captain',
    });

    const updateLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          socket.emit('update-location-captain', {
            userId: captain._id,
            location: {
              ltd: position.coords.latitude,
              lng: position.coords.longitude,
            },
          });
        });
      }
    };

    const locationInterval = setInterval(updateLocation, 10000);
    updateLocation();

    // Cleanup interval on unmount
    return () => clearInterval(locationInterval);
  }, [socket, captain._id]);

  socket.on('new-ride', (data) => {
    setRide(data);
    setRidePopupPanel(true);
  });

  async function confirmRide() {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKENED_URL}/rides/confirm`,
      {
        rideId: ride._id,
        captainId: captain._id,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('captain-token')}`,
        },
      }
    );

    setRidePopupPanel(false);
    setConfirmRidePopupPanel(true);
  }

  useGSAP(() => {
    if (ridePopupPanel) {
      gsap.to(ridePopupPanelRef.current, { y: 0 });
    } else {
      gsap.to(ridePopupPanelRef.current, { y: '100%' });
    }
  }, [ridePopupPanel]);

  useGSAP(() => {
    if (confirmRidePopupPanel) {
      gsap.to(confirmRidePopupPanelRef.current, { y: 0 });
    } else {
      gsap.to(confirmRidePopupPanelRef.current, { y: '100%' });
    }
  }, [confirmRidePopupPanel]);

  return (
    <div className="flex flex-col h-screen">
      {/* Map Section */}
      <div className="h-2/3 w-full">
        <LiveTracking />
      </div>

      {/* Captain Details Section */}
      <div className="h-1/3 p-6">
        <CaptainDetails />
      </div>

      {/* Ride Popup Panel */}
      <div
        ref={ridePopupPanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-4 py-10 pt-14 md:px-10 md:py-16"
      >
        <RidePopUp
          ride={ride}
          setRidePopupPanel={setRidePopupPanel}
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
          confirmRide={confirmRide}
        />
      </div>

      {/* Confirm Ride Popup Panel */}
      <div
        ref={confirmRidePopupPanelRef}
        className="fixed w-full h-screen z-10 bottom-0 translate-y-full bg-white px-4 py-10 pt-14 md:px-10 md:py-16"
      >
        <ConfirmRidePopUp
          ride={ride}
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
          setRidePopupPanel={setRidePopupPanel}
        />
      </div>
    </div>
  );
};

export default CaptainHome;
