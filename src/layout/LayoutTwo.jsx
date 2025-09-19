import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import NavbarWhite from '../components/NavbarWhite'
import ResNavbarWhite from '../components/ResNavbarWhite'
const LayoutTwo = () => {
  return (
    <>
        <NavbarWhite/>
        <ResNavbarWhite/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default LayoutTwo