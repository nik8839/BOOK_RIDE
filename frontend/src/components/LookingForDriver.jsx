import React from 'react';

const LookingForDriver = (props) => {
    return (
        <div className="lg:w-3/5 lg:mx-auto p-6 bg-white shadow-md rounded-lg">
            <h5
                className="p-1 text-center w-full absolute top-0 cursor-pointer"
                onClick={() => {
                    props.setVehicleFound(false);
                }}
            >
                <i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i>
            </h5>
            <h3 className="text-2xl font-semibold mb-5 text-center">Looking for a Driver</h3>

            <div className="flex flex-col items-center gap-6">
                <img
                    className="h-40 rounded-lg object-cover"
                    src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
                    alt="Car"
                />
                <div className="w-full mt-5">
                    <div className="flex items-center gap-5 p-4 border-b">
                        <i className="ri-map-pin-user-fill text-2xl text-gray-500"></i>
                        <div>
                            <h3 className="text-lg font-medium text-gray-800">562/11-A</h3>
                            <p className="text-sm text-gray-600">{props.pickup}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-4 border-b">
                        <i className="ri-map-pin-2-fill text-2xl text-gray-500"></i>
                        <div>
                            <h3 className="text-lg font-medium text-gray-800">562/11-A</h3>
                            <p className="text-sm text-gray-600">{props.destination}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-4">
                        <i className="ri-currency-line text-2xl text-gray-500"></i>
                        <div>
                            <h3 className="text-lg font-medium text-gray-800">
                                ₹{props.fare[props.vehicleType]}
                            </h3>
                            <p className="text-sm text-gray-600">Cash</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LookingForDriver;
