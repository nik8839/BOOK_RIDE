import React from 'react';
import { useContext } from 'react';
import { useNavigate, Link, useLocation  } from 'react-router-dom';
import axios from 'axios';
import { SocketContext } from '../context/SocketContext'




const FinishRide = (props) => {
  const navigate = useNavigate();
      const location = useLocation()
       const { ride } = location.state || {} 
       console.log("in finish ride "+ride)

         const { socket } = useContext(SocketContext)
       socket.on("ride-ended", () => {
        navigate('/home')
    })

      


  async function endRide() {
    console.log("in finish ride "+props.ride._id)
    const response = await axios.post(
      `${process.env.REACT_APP_BACKENED_URL}/rides/end-ride`,
      {
        rideId: props.ride._id,
        
    
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );

    if (response.status === 200) {
      navigate('/captainhome');
    }
  }

  return (
    <div className="p-6 lg:p-10 lg:w-1/2 lg:mx-auto bg-white rounded-lg shadow-md">
      <h5
        className="p-1 text-center w-[93%] absolute top-0 cursor-pointer lg:right-2 lg:w-auto"
        onClick={() => {
          props.setFinishRidePanel(false);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl lg:text-3xl font-semibold mb-5">Finish this Ride</h3>

      <div className="flex items-center justify-between p-4 border-2 border-yellow-400 rounded-lg mt-4">
        <div className="flex items-center gap-3">
          <img
            className="h-12 lg:h-16 rounded-full object-cover w-12 lg:w-16"
            src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg"
            alt=""
          />
          <h2 className="text-lg lg:text-xl font-medium capitalize">
            {props.ride?.user.fullname.firstname}
          </h2>
        </div>
        <h5 className="text-lg lg:text-xl font-semibold">2.2 KM</h5>
      </div>

      <div className="flex flex-col gap-4 mt-5">
        <div className="w-full">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-user-fill text-lg lg:text-xl"></i>
            <div>
              <h3 className="text-lg lg:text-xl font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">{props.ride?.pickup}</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-2-fill text-lg lg:text-xl"></i>
            <div>
              <h3 className="text-lg lg:text-xl font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">{props.ride?.destination}</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-line text-lg lg:text-xl"></i>
            <div>
              <h3 className="text-lg lg:text-xl font-medium">₹{props.ride?.fare}</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash</p>
            </div>
          </div>
        </div>

        <div className="mt-10 w-full">
          <button
            onClick={endRide}
            className="w-full mt-5 text-lg lg:text-xl flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg"
          >
            Finish Ride
          </button>
        </div>
      </div>
    </div>
  );
};


export default FinishRide;
