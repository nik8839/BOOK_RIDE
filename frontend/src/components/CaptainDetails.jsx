import React, { useContext } from 'react';
import { CaptainDataContext } from '../context/CaptainContext';

const CaptainDetails = () => {
    const { captain } = useContext(CaptainDataContext);

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <img
                        className="h-14 w-14 rounded-full object-cover"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&s"
                        alt="Captain"
                    />
                    <h4 className="text-2xl font-medium capitalize">
                        {captain.fullname.firstname + ' ' + captain.fullname.lastname}
                    </h4>
                </div>
                <div className="text-right">
                    <h4 className="text-2xl font-semibold text-gray-800">₹295.20</h4>
                    <p className="text-sm text-gray-500">Earned</p>
                </div>
            </div>

            {/* Statistics Section */}
            <div className="grid grid-cols-3 gap-6 bg-gray-50 p-6 rounded-lg">
                <div className="text-center">
                    <i className="text-4xl text-blue-600 mb-3 font-thin ri-timer-2-line"></i>
                    <h5 className="text-lg font-semibold text-gray-800">10.2</h5>
                    <p className="text-sm text-gray-500">Hours Online</p>
                </div>
                <div className="text-center">
                    <i className="text-4xl text-green-600 mb-3 font-thin ri-speed-up-line"></i>
                    <h5 className="text-lg font-semibold text-gray-800">10.2</h5>
                    <p className="text-sm text-gray-500">Rides Completed</p>
                </div>
                <div className="text-center">
                    <i className="text-4xl text-purple-600 mb-3 font-thin ri-booklet-line"></i>
                    <h5 className="text-lg font-semibold text-gray-800">10.2</h5>
                    <p className="text-sm text-gray-500">Trips Pending</p>
                </div>
            </div>
        </div>
    );
};

export default CaptainDetails;
