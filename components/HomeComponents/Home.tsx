import React from 'react'
import Banner from './Banner'
import AboutPreview from './AboutPreview'
import ServicesPreview from './ServicesPreview'
import Gallery from './Gallery'
import Updates from './Updates'
import StatsAndAnalytics from './StatsAndAnalytics'
import Cta from './Cta'

const HomeSection = () => {
  return (
    <div>
        <Banner/>
        <AboutPreview/>
        <ServicesPreview/>
        <Updates/>
        <StatsAndAnalytics/>
        <Cta/>
        <Gallery/>
    </div>
  )
}

export default HomeSection