import React from 'react'
import HomeCarousel from '../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel'
import HomeCard from './HomeCard/HomeCard'
import HomeMenu from './HomeMenu/HomeMenu'

export default function Home() {
  return (
    <div className='bg-neutral-900 ' >
      <HomeCarousel/>
      <HomeCard/>
      <HomeMenu/>
    </div>
  )
}
