import React from 'react';

const RidePopUp = (props) => {
    return (
        <div className="lg:w-3/5 lg:mx-auto p-6 bg-white shadow-md rounded-lg relative">
            <h5
                className="p-1 text-center w-full absolute top-0 cursor-pointer"
                onClick={() => {
                    props.setRidePopupPanel(false);
                }}
            >
                <i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i>
            </h5>
            <h3 className="text-2xl font-semibold mb-5 text-center">New Ride Available!</h3>
            <div className="flex items-center justify-between p-4 bg-yellow-400 rounded-lg mt-4">
                <div className="flex items-center gap-4">
                    <img
                        className="h-16 w-16 rounded-full object-cover"
                        src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg"
                        alt="User"
                    />
                    <h2 className="text-lg font-medium text-gray-800">
                        {props.ride?.user.fullname.firstname + ' ' + props.ride?.user.fullname.lastname}
                    </h2>
                </div>
                <h5 className="text-lg font-semibold text-gray-800">2.2 KM</h5>
            </div>
            <div className="flex flex-col items-center gap-4">
                <div className="w-full mt-5">
                    <div className="flex items-center gap-5 p-4 border-b">
                        <i className="ri-map-pin-user-fill text-2xl text-gray-500"></i>
                        <div>
                            <h3 className="text-lg font-medium text-gray-800">562/11-A</h3>
                            <p className="text-sm text-gray-600">{props.ride?.pickup}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-4 border-b">
                        <i className="ri-map-pin-2-fill text-2xl text-gray-500"></i>
                        <div>
                            <h3 className="text-lg font-medium text-gray-800">562/11-A</h3>
                            <p className="text-sm text-gray-600">{props.ride?.destination}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-4">
                        <i className="ri-currency-line text-2xl text-gray-500"></i>
                        <div>
                            <h3 className="text-lg font-medium text-gray-800">₹{props.ride?.fare}</h3>
                            <p className="text-sm text-gray-600">Cash</p>
                        </div>
                    </div>
                </div>
                <div className="mt-5 w-full">
                    <button
                        onClick={() => {
                            props.setConfirmRidePopupPanel(true);
                            props.confirmRide();
                        }}
                        className="bg-green-600 w-full text-white font-semibold p-3 rounded-lg hover:bg-green-700"
                    >
                        Accept
                    </button>

                    <button
                        onClick={() => {
                            props.setRidePopupPanel(false);
                        }}
                        className="mt-3 w-full bg-gray-300 text-gray-700 font-semibold p-3 rounded-lg hover:bg-gray-400"
                    >
                        Ignore
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RidePopUp;
