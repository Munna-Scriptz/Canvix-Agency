import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import Footer from '../components/Footer'
import NavbarWhite from '../components/NavbarWhite'
import ResNavbarWhite from '../components/ResNavbarWhite'
import Aos from 'aos'
import "aos/dist/aos.css"

const LayoutTwo = () => {
  // ------------------Aos Function---------------
  const location = useLocation()
  useEffect(() => {
  Aos.init({ duration: 1000, once: false });

  const handleEvents = () => Aos.refresh();
  window.addEventListener("load", handleEvents);
  window.addEventListener("scroll", handleEvents);

  return () => {
    window.removeEventListener("load", handleEvents);
    window.removeEventListener("scroll", handleEvents);
  };
}, [location]);

  return (
    <>
      <NavbarWhite />
      <ResNavbarWhite />
      <Outlet />
      <Footer />
    </>
  )
}

export default LayoutTwo