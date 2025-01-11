import React from 'react'
import Hero from './Hero/Hero'
import AboutUS from './AboutUs/AboutUS'
import OurProducts from './OurProducts/OurProducts'
import Testimonial from './Testimonial/Testimonial'
import OurBlog from './Our Blog/OurBlog'

const Home = () => {
  return (
    <div className='overflow-hidden '>
       <Hero/>
       <AboutUS/>
       <OurProducts/>
       <Testimonial/>
       <OurBlog/>
      
    </div>
  )
}

export default Home
