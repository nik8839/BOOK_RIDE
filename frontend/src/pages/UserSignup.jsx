import React, { useState ,useContext} from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import { UserDataContext } from '../context/UserContext'
import axios from 'axios';
const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate=useNavigate()
  const { user, setUser } = useContext(UserDataContext)
  const submitHandler = async(e) => {
    e.preventDefault();
    
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password
    }
    
    
    const response = await axios.post(`${process.env.REACT_APP_BACKENED_URL}/users/register`, newUser)

    if (response.status === 201) {
      const data = response.data
      setUser(data.user)
      alert("User created successfully")
      localStorage.setItem('token', data.token)
      navigate('/home')
    }
    setEmail('')
    setPassword('')
    setLastName('')
    setFirstName('')
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg border border-black p-10 w-full max-w-md mt-20 mb-10 pt-5 pb-5">
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <img
            className="w-16"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s"
            alt="Logo"
          />
        </div>

        {/* Signup Form Section */}
        <form onSubmit={(e) => {
          submitHandler(e)
        }} className="space-y-6">
          {/* Full Name Section */}
          <div className="flex gap-4 mb-7">
            <div className="w-1/2">
              <h3 className="text-lg font-medium mb-2 text-gray-700">First Name</h3>
              <input
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="bg-[#eeeeee] rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
                type="text"
                placeholder="First name"
                aria-label="First name"
              />
            </div>
            <div className="w-1/2">
              <h3 className="text-lg font-medium mb-2 text-gray-700">Last Name</h3>
              <input
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="bg-[#eeeeee] rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
                type="text"
                placeholder="Last name"
                aria-label="Last name"
              />
            </div>
          </div>

          {/* Email Section */}
          <div>
            <h3 className="text-lg font-medium mb-2 text-gray-700">What's your email?</h3>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#eeeeee] rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
              type="email"
              placeholder="email@example.com"
              aria-label="Email"
            />
          </div>

          {/* Password Section */}
          <div>
            <h3 className="text-lg font-medium mb-2 text-gray-700">Enter Password</h3>
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#eeeeee] rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
              type="password"
              placeholder="password"
              aria-label="Password"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="bg-[#111] text-white font-semibold rounded-lg px-4 py-2 w-full text-lg"
            >
              Create account
            </button>
          </div>
        </form>

        {/* Login Redirect */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <Link to="/userlogin" className="text-blue-600 font-medium">
            Login here
          </Link>
        </p>

        {/* reCAPTCHA Disclaimer */}
        <div className="mt-6 text-[10px] leading-tight text-gray-500">
          This site is protected by reCAPTCHA and the{' '}
          <span className="underline">Google Privacy Policy</span> and{' '}
          <span className="underline">Terms of Service apply</span>.
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
