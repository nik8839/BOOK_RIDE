import React from "react";
import { Link } from "react-router-dom";
import UserLogin from "./UserLogin";

const Start = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593950315186-76a92975b60c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      {/* Logo */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2">
        <img 
          src="https://imgs.search.brave.com/q44jFtYXNah4DWgGWp4g1_rHn6PvxZ9DNdIIJ60Rz5g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zLnlp/bWcuY29tL255L2Fw/aS9yZXMvMS4yL1M5/cXpKNERYd0UzNm5O/SDNNT2VwRXctLS9Z/WEJ3YVdROWFHbG5h/R3hoYm1SbGNqdDNQ/VGsyTUR0b1BUUTRN/QS0tL2h0dHA6Ly9n/bG9iYWxmaW5hbmNl/LnplbmZzLmNvbS9l/bl91cy9GaW5hbmNl/L1VTX0FGVFBfU0lM/SUNPTkFMTEVZX0hf/TElWRS9VYmVyX2p1/c3RfY2hhbmdlZF9p/dHNfbG9nby1hMTY5/ZjA2ZDM3YThmOGRk/MWMwYzA2Njg1M2Vh/ZGNiNg" 
          alt="Uber Logo" 
          className="w-48"
        />
      </div>

      {/* Continue Button */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
        <Link to="/userlogin"
          className="px-6 py-3 bg-black text-white text-xl font-semibold rounded-full shadow-lg hover:bg-gray-800"
          
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Start;
