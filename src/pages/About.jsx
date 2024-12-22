import React from 'react'
import Team from '../component/Team'

const About = () => {
  return (
    <>
      <div className="relative h-screen">
        <img
          src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Travel agency wants to offer you the best experiences and memories of your life!
          </h1>
          <p className="text-xl md:text-2xl text-center mb-8">
            Our team has only one goal: to create memorable moments for our travelers.
            "People forget years and remember moments."
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
            Start Your Journey
          </button>
        </div>
      </div>
      <Team />
    </>  
  )
}

export default About