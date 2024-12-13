// 
import React from 'react';

const LocationSearchPanel = ({ suggestions, setVehiclePanel, setPanelOpen, setPickup, setDestination, activeField }) => {

    const handleSuggestionClick = (suggestion) => {
        console.log(suggestion)
        if (activeField === 'pickup') {
             setPickup(suggestion);
        } else if (activeField === 'destination') {
            setDestination(suggestion);
        }
        // Uncomment below lines if panel needs to be closed or vehicle panel opened after selection
        // setVehiclePanel(true);
        // setPanelOpen(false);
    };

    return (
        <div className="p-6 lg:w-3/5 lg:mx-auto bg-white shadow-md rounded-lg">
            {/* Display fetched suggestions */}
            {suggestions.map((elem, idx) => (
                <div
                    key={idx}
                    onClick={() => handleSuggestionClick(elem.name)}
                    className="flex gap-4 border-2 p-3 border-gray-200 hover:border-black rounded-xl items-center my-3 cursor-pointer"
                >
                    <h2 className="bg-gray-200 h-10 flex items-center justify-center w-10 rounded-full">
                        <i className="ri-map-pin-fill text-gray-600"></i>
                    </h2>
                    {/* Access a property like `name` or `country` of the object */}
                    <h4 className="font-medium text-lg text-gray-800">{elem.name || elem.street || elem.country || "Unknown location"}</h4>
                </div>
            ))}
        </div>
    );
};

export default LocationSearchPanel;
