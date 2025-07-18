import React from 'react'
import Nav from '@/components/nav/resnav'
import Footer from '@/components/footer/footer'
import { VisionHero } from '@/components/section/vision/hero'
import { CoreValues } from '@/components/section/vision/core'
import { BrandPersonality } from '@/components/section/vision/brand'
import { OurPathForward } from '@/components/section/vision/forward'

const VisionPage = () => {
  return (
    <>
      <Nav />
      <main className="w-full">
        <VisionHero />
        <CoreValues />
        <BrandPersonality />
        <OurPathForward />
      </main>
      <Footer />
    </>
  )
}

export default VisionPage
