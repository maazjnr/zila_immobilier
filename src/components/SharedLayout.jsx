import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from '../pages/Footer';


const SharedLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
  )
}

export default SharedLayout;
