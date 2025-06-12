import React from 'react'
import { useAuth } from '../../context/authContext';
import Sidebar from './component/Sidebar';
import {Outlet} from "react-router-dom";
import Navbar from './component/navbar';

const Dashboard = () => {
      const { user, token, logout } = useAuth();
 console.log(user)
  return (
    <section className='flex'> 
    <article className='w-fit'>
    <Sidebar />
    </article>
    
    <article className='w-full h-screen overflow-y-auto px-12 py-5'>
      <Navbar />
        <Outlet />

    </article>
   
    </section>
  )
}

export default Dashboard