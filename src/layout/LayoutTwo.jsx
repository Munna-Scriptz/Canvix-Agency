import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import NavbarWhite from '../components/NavbarWhite'
const LayoutTwo = () => {
  return (
    <>
        <NavbarWhite/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default LayoutTwo