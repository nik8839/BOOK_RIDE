import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import CaptainLogin from "./pages/CaptainLogin";
import UserSignup from "./pages/UserSignup";
import CaptainSignup from "./pages/CaptainSignup";
import Start from "../src/pages/Start";
import UserLayer from "./pages/UserLayer";
import UserLogout from "./pages/UserLogout";
import CaptainLogout from "./pages/CaptainLogout";
import CaptainHome from "./pages/CaptainHome";
import CaptainLayer from "./pages/CaptainLayer";
import Riding from "./pages/Riding";
import CaptainRiding from "./pages/CaptainRiding";
import Payment from "./pages/Payment";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />}></Route>
        <Route path="/userlogin" element={<UserLogin />}></Route>
        <Route path='/riding' element={<Riding />} />
        <Route path='/captainriding' element={<CaptainRiding />} />
        <Route path="/captainlogin" element={<CaptainLogin />}></Route>
        <Route path="/usersignup" element={<UserSignup />}></Route>
        <Route path="/captainsignup" element={<CaptainSignup />}></Route>

        <Route
          path="/payment"
          element={
            
              <Payment />
            
          }
        />
        <Route
          path="/home"
          element={
            <UserLayer>
              <Home />
            </UserLayer>
          }
        ></Route>
        <Route
          path="/userlogout"
          element={
            <UserLayer>
              <UserLogout />
            </UserLayer>
          }
        />
        <Route
          path="/captainhome"
          element={
            <CaptainLayer>
              <CaptainHome />
            </CaptainLayer>
          }
        ></Route>
                <Route
          path="/captainlogout"
          element={
            <CaptainLayer>
              <CaptainLogout />
            </CaptainLayer>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
