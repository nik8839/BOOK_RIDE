import React from 'react';

const VehiclePanel = (props) => {
    
    return (
        <div className="lg:w-3/5 lg:mx-auto p-6 bg-white shadow-md rounded-lg relative">
            <h5
                className="p-1 text-center w-full absolute top-0 cursor-pointer"
                onClick={() => {
                    props.setVehiclePanel(false);
                }}
            >
                <i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i>
            </h5>
            <h3 className="text-2xl font-semibold mb-5 text-center">Choose a Vehicle</h3>

            {/* UberGo */}
            <div
                onClick={() => {
                    props.setConfirmRidePanel(true);
                    props.selectVehicle('car');
                }}
                className="flex border-2 hover:border-black transition-all mb-3 rounded-xl p-4 items-center justify-between cursor-pointer"
            >
                <img
                    className="h-16 w-16 rounded object-cover"
                    src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
                    alt="UberGo"
                />
                <div className="ml-4 flex-1">
                    <h4 className="font-medium text-lg">
                        UberGo <span className="text-gray-500"><i className="ri-user-3-fill"></i> 4</span>
                    </h4>
                    <h5 className="font-medium text-sm text-gray-600">2 mins away</h5>
                    <p className="text-sm text-gray-500">Affordable, compact rides</p>
                </div>
                <h2 className="text-lg font-semibold text-gray-800">₹{props.fare.car}</h2>
            </div>

            {/* Moto */}
            <div
                onClick={() => {
                    props.setConfirmRidePanel(true);
                    props.selectVehicle('moto');
                }}
                className="flex border-2 hover:border-black transition-all mb-3 rounded-xl p-4 items-center justify-between cursor-pointer"
            >
                <img
                    className="h-16 w-16 rounded object-cover"
                    src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
                    alt="Moto"
                />
                <div className="ml-4 flex-1">
                    <h4 className="font-medium text-lg">
                        Moto <span className="text-gray-500"><i className="ri-user-3-fill"></i> 1</span>
                    </h4>
                    <h5 className="font-medium text-sm text-gray-600">3 mins away</h5>
                    <p className="text-sm text-gray-500">Affordable motorcycle rides</p>
                </div>
                <h2 className="text-lg font-semibold text-gray-800">₹{props.fare.moto}</h2>
            </div>

            {/* UberAuto */}
            <div
                onClick={() => {
                    props.setConfirmRidePanel(true);
                    props.selectVehicle('auto');
                }}
                className="flex border-2 hover:border-black transition-all mb-3 rounded-xl p-4 items-center justify-between cursor-pointer"
            >
                <img
                    className="h-16 w-16 rounded object-cover"
                    src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
                    alt="UberAuto"
                />
                <div className="ml-4 flex-1">
                    <h4 className="font-medium text-lg">
                        UberAuto <span className="text-gray-500"><i className="ri-user-3-fill"></i> 3</span>
                    </h4>
                    <h5 className="font-medium text-sm text-gray-600">3 mins away</h5>
                    <p className="text-sm text-gray-500">Affordable Auto rides</p>
                </div>
                <h2 className="text-lg font-semibold text-gray-800">₹{props.fare.auto}</h2>
            </div>
        </div>
    );
};

export default VehiclePanel;
