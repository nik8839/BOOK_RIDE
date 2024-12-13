import React, { useContext, useEffect, useState } from 'react'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserLayer = ({children}) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const [ isLoading, setIsLoading ] = useState(true)
    const { user, setUser } = useContext(UserDataContext)
    useEffect(() => {
        if(!token)
            {
                navigate("/userlogin")
            }

            axios.get(`${process.env.REACT_APP_BACKENED_URL}/users/profile`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {
                if (response.status === 200) {
                    setUser(response.data)
                    setIsLoading(false)
                }
            })
                .catch(err => {
                    console.log(err)
                    localStorage.removeItem('token')
                    navigate('/userlogin')
                })
    
    }, [token])
    if (isLoading) {
        return (
            <div><h1>Loading...</h1></div>
        )
    }
    


  return (
    <>
    {children}
    </>
  )
}

export default UserLayer