import React, { useState, useContext } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import axios from 'axios'

import { UserDataContext } from '../context/UserContext'

const UserLogin = () => {
  const navigate=useNavigate()

  
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const { user, setUser } = useContext(UserDataContext)






  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password
    }

    const response = await axios.post(`${process.env.REACT_APP_BACKENED_URL}/users/login`, userData)

    if (response.status === 200) {
      const data = response.data
      //console.log(data)
      setUser(data.user)
      localStorage.setItem('token', data.token)
      //console.log("navigating")
      navigate('/home')
    }
    setEmail('')
    setPassword('')
  }

return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-md">
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <img
            className="w-16"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s"
            alt="Logo"
          />
        </div>

        {/* Form Section */}
        <form onSubmit={(e) => {
          submitHandler(e)
        }} className="space-y-6" >
          {/* Email Field */}
          <div>
            <h3 className="text-lg font-medium mb-2 text-gray-700">What's your email?</h3>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#eeeeee] rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
              type="email"
              placeholder="email@example.com"
            />
          </div>

          {/* Password Field */}
          <div>
            <h3 className="text-lg font-medium mb-2 text-gray-700">Enter Password</h3>
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#eeeeee] rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
              type="password"
              placeholder="password"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              className="bg-[#111] text-white font-semibold rounded-lg px-4 py-2 w-full text-lg"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-gray-600 mt-4">
          New here?{' '}
          <Link to="/usersignup" className="text-blue-600 font-medium">
            Create new Account
          </Link>
        </p>

        {/* Captain Login Link */}
        <div className="mt-5">
          <Link
            to="/captainlogin"
            className="bg-[#10b461] text-white font-semibold rounded-lg px-4 py-2 w-full text-lg flex items-center justify-center"
          >
            Sign in as Captain
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserLogin