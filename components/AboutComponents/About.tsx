import React from 'react'
import AboutBanner from './AboutBanner'
import AboutDescription from './AboutDescription'
import Team from './Team'
import Aboutservice from './Aboutservice'
import LatestUpdate from './LatestUpdate'

const About = () => {
  return (
    <div>
      <AboutBanner/>
      <AboutDescription/>
      <LatestUpdate/>
      <Aboutservice/>
      <Team/>
    </div>
  )
}

export default About