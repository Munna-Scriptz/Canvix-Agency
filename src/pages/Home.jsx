import React from 'react'
import Banner from '../components/home/Banner'
import Services from '../components/home/Services'
import HomeAbout from '../components/home/HomeAbout'
import Process from '../components/home/Process'
import Recent from '../components/home/Recent'
import Reviews from '../components/home/Reviews'

const Home = () => {
  return (
    <>
      <Banner/>
      <Services/>
      <HomeAbout/>
      <Process/>
      <Recent/>
      <Reviews/>
    </>
  )
}

export default Home