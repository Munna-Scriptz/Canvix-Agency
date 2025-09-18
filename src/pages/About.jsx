import React from 'react'
import AboutBanner from '../components/About/AboutBanner'
import Counter from '../components/About/Counter'
import OurMission from '../components/About/OurMission'
import OurTeam from '../components/About/OurTeam'
import EnoughTalk from '../components/common/EnoughTalk'

const About = () => {
  return (
    <>
        <AboutBanner/>
        <Counter/>
        <OurMission/>
        <OurTeam/>
        <EnoughTalk/>
    </>
  )
}

export default About