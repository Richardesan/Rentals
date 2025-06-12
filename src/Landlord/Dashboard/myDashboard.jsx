import React from 'react'
import { useAuth } from '../../context/authContext'
const MyDashboard = () => {
const {user} = useAuth()
// console.log(user)
  return (
    <div> User Dashboard{user.firstname}</div>
  )
}

export default MyDashboard