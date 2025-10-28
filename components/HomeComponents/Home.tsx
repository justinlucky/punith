import React from 'react'
import Banner from './Banner'
import AboutPreview from './AboutPreview'
import ServicesPreview from './ServicesPreview'
import Updates from './Updates'
import StatsAndAnalytics from './StatsAndAnalytics'
import Cta from './Cta'
import { Gallery } from './Gallery'

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