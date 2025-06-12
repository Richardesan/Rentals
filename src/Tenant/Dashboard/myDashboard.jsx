import React from 'react'
import { useAuth } from '../../context/authContext'
const MyDashboard = () => {
  const {user, userType} =useAuth()
  console.log(user)
  console.log(userType)
  return (
    <div>
reall or fake
    </div>
  )
}

export default MyDashboard