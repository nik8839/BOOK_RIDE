import React from "react";
import { Link, useLocation } from "react-router-dom"; // Added useLocation
import { useEffect, useContext } from "react";
import { SocketContext } from "../context/SocketContext";
import { useNavigate } from "react-router-dom";
import LiveTracking from "../components/LiveTracking";

const Riding = () => {
  const location = useLocation();
  const { ride } = location.state || {};

  const { socket } = useContext(SocketContext);
  const navigate = useNavigate();

  socket.on("ride-ended", () => {
    navigate("/home");
  });

  return (
    <div className="h-screen flex flex-col">
      <Link
        to="/home"
        className="fixed right-4 top-4 h-12 w-12 bg-white flex items-center justify-center rounded-full shadow-lg"
      >
        <i className="text-xl font-medium ri-home-5-line"></i>
      </Link>
      <div className="flex-1">
        <LiveTracking />
      </div>
      <div className="flex-1 p-6 md:p-10">
        <div className="flex items-center justify-between mb-5">
          <img
            className="h-16 w-16 object-cover rounded-full"
            src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
            alt="Driver"
          />
          <div className="text-right">
            <h2 className="text-xl font-medium capitalize">
              {ride?.captain.fullname.firstname}
            </h2>
            <h4 className="text-lg font-semibold -mt-1 -mb-1">
              {ride?.captain.vehicle.plate}
            </h4>
            <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="w-full">
            <div className="flex items-center gap-4 p-3 border-b-2">
              <i className="text-lg ri-map-pin-2-fill"></i>
              <div>
                <h3 className="text-lg font-medium">{ride?.destination}</h3>
                <p className="text-sm text-gray-600">{ride?.destination}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3">
              <i className="ri-currency-line"></i>
              <div>
                <h3 className="text-lg font-medium">₹{ride?.fare}</h3>
                <p className="text-sm text-gray-600">Cash Cash</p>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">
          <Link to="/payment">Make a Payment</Link>
        </button>
      </div>
    </div>
  );
};

export default Riding;
