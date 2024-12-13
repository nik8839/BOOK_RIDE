import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CaptainDataContext } from '../context/CaptainContext'

const Captainlogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { captain, setCaptain } = React.useContext(CaptainDataContext)
  const navigate = useNavigate()
  const submitHandler = async (e) => {
    e.preventDefault();
    const captaindata={
      email:email,
      password:password

    }
    const response = await axios.post(`${process.env.REACT_APP_BACKENED_URL}/captains/login`, captain)

    if (response.status === 200) {
      const data = response.data

      setCaptain(data.captain)
      localStorage.setItem('captain-token', data.token)
      navigate('/captainhome')

    }
    console.log(captaindata)

    setEmail('')
    setPassword('')
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg border border-black p-10 w-full max-w-md">
        {/* Logo Section */}
        <div className="flex justify-center mb-6">
          <img
            className="w-20"
            src="https://www.svgrepo.com/show/505031/uber-driver.svg"
            alt="Captain Logo"
          />
        </div>

        {/* Login Form Section */}
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
          {/* Email Input */}
          <h3 className="text-lg font-medium mb-2 text-gray-700">What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-6 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
          />

          {/* Password Input */}
          <h3 className="text-lg font-medium mb-2 text-gray-700">Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-6 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
          />

          {/* Login Button */}
          <button
            type="submit"
            className="bg-[#111] text-white font-semibold mb-4 rounded-lg px-4 py-2 w-full text-lg"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-600">
          Join a fleet?{' '}
          <Link to="/captainsignup" className="text-blue-600 font-medium">
            Register as a Captain
          </Link>
        </p>

        {/* Switch to User Login */}
        <div className="mt-6">
          <Link
            to="/userlogin"
            className="bg-[#d5622d] flex items-center justify-center text-white font-semibold rounded-lg px-4 py-2 w-full text-lg"
          >
            Sign in as User
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Captainlogin;
