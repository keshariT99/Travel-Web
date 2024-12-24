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
      <div className="container mx-auto px-4 py-20">
        <p className="text-gray-600 text-center mb-12 italic">
        Welcome to TravelBug, your ultimate companion for discovering breathtaking destinations around the world. <br />
        At TravelBug, we believe that every journey begins with inspiration, and our mission is to ignite your wanderlust with beautifully curated travel experiences.<br />

        Our platform is designed to help you explore top destinations, plan unforgettable trips, and dive into the magic of travel—all from the comfort of your screen. <br />
        Whether you're an adventurer, a culture enthusiast, or a laid-back traveler, TravelBug is here to guide you every step of the way.<br />

        Start your journey with TravelBug, where every trip is a story waiting to be told!
        </p>
      </div>
      <Team />
    </>  
  )
}

export default About