import React from 'react'
import Hero from '../component/Hero'
import Navbar from '@/app/shared/Navbar'
import ValuesSection from '../component/ValueSection'
import ContentSection from '../component/ContentSection'
import TeachingSection from '../component/TeachingSection'
import MissionCard from '../component/MissionCard'
import Program from '../component/Program'
import SubjectTech from '../component/SubjectTech'
import Map from '../component/Map'
import MasterSection from '../component/MasterSection'
import Testimonials from '../component/Testimonials'
import Blog from '../component/Blog'
import Footer from '../component/Footer'


const Mainhome = () => {
    return (
        <div >
            <Navbar />
            <Hero />
            <ValuesSection/>
            <ContentSection/>
            <MissionCard/>
            <TeachingSection/>
            <Program/>
            <SubjectTech/>
            <Map/>
            <MasterSection/>
            <Testimonials/>
            <Blog/>
            <Footer/>
         
        </div>
    )
}

export default Mainhome
