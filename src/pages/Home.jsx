import React from 'react'
import FeaturedDestination from '../component/featuredDestination'
import Services from '../component/Services'

const Home = () => {
  return (
    <>
    <div className='relative h-screen bg-cover bg-center mb-5' >
    <video
    className="absolute inset-0 w-full h-full object-cover"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/Images/main.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
        <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
            <h1 className='text-3xl md:text-3xl font-bold text-white mb-4'>Discover the timeless beauty of Sri Lanka with us.</h1>
            <p className='text-lg md:text-2xl text-white mb-8'>Discover amaizing places at exclusive deals</p>
            <button
            className='border text-white px-6 py-2 rounded-full text-lg md:text-xl hover:bg-blue-500 transform transition duration-300 hover:scale-105'
            >Get Started</button>
        </div>
    </div>
    <FeaturedDestination />
    <Services/>
    </>
  )
}

export default Home