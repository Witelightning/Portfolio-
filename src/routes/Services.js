import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg2 from '../components/HeroImg2'
import Service from '../components/Service'


const Services= () => {
  return (
    <div>
        <Navbar/>
        <HeroImg2 heading="Services" text="My services are listed below"/>
        <Service/>
    </div>
  )
}

export default Services