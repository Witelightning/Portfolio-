import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg2 from '../components/HeroImg2'
import WorkCard from '../components/WorkCard'

const Project = () => {
  return (
    <div>
    <Navbar/>
    <HeroImg2 heading="PROJECTS" text="Some of my most recent works"/>
    <WorkCard/>
    </div>
  )
}

export default Project