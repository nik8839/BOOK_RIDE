import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const UserLogout = () => {

    const token = localStorage.getItem('token')
    console.log(token)
    const navigate = useNavigate()

    axios.get(`${process.env.REACT_APP_BACKENED_URL}/users/logout`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        if (response.status === 200) {
            localStorage.removeItem('token')
            navigate('/userlogin')
        }
    })

    return (
        <div>UserLogout</div>
    )
}

export default UserLogout
