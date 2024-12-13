import React from 'react';

const ConfirmRide = (props) => {
    return (
        <div className="lg:w-1/2 lg:mx-auto bg-white p-6 rounded-lg shadow-lg relative">
            {/* Close Button */}
            <h5 
                className="p-1 text-center w-[93%] absolute top-0 cursor-pointer lg:top-2 lg:right-2 lg:w-auto" 
                onClick={() => {
                    props.setConfirmRidePanel(false);
                }}
            >
                <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
            </h5>

            {/* Header */}
            <h3 className="text-2xl font-semibold mb-5 text-center lg:text-left">Confirm your Ride</h3>

            <div className="flex flex-col lg:flex-row lg:gap-10 lg:items-start">
                {/* Image */}
                <img 
                    className="h-20 lg:h-40 mx-auto lg:mx-0" 
                    src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" 
                    alt="Ride Image" 
                />

                {/* Ride Details */}
                <div className="w-full mt-5 lg:mt-0">
                    {/* Pickup Location */}
                    <div className="flex items-center gap-5 p-3 border-b-2">
                        <i className="ri-map-pin-user-fill text-xl lg:text-2xl"></i>
                        <div>
                            <h3 className="text-lg font-medium">562/11-A</h3>
                            <p className="text-sm -mt-1 text-gray-600">{props.pickup}</p>
                        </div>
                    </div>

                    {/* Destination Location */}
                    <div className="flex items-center gap-5 p-3 border-b-2">
                        <i className="ri-map-pin-2-fill text-xl lg:text-2xl"></i>
                        <div>
                            <h3 className="text-lg font-medium">562/11-A</h3>
                            <p className="text-sm -mt-1 text-gray-600">{props.destination}</p>
                        </div>
                    </div>

                    {/* Fare */}
                    <div className="flex items-center gap-5 p-3">
                        <i className="ri-currency-line text-xl lg:text-2xl"></i>
                        <div>
                            <h3 className="text-lg font-medium">₹{props.fare[props.vehicleType]}</h3>
                            <p className="text-sm -mt-1 text-gray-600">Cash</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Confirm Button */}
            <button 
                onClick={() => {
                    props.setVehicleFound(true);
                    props.setConfirmRidePanel(false);
                    props.createRide();
                }} 
                className="w-full mt-5 bg-green-600 text-white font-semibold p-3 rounded-lg text-lg lg:w-1/2 lg:mx-auto"
            >
                Confirm
            </button>
        </div>
    );
};

export default ConfirmRide;
