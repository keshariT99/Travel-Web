import React from 'react';
import { ThumbsUp, Trophy, Heart } from 'lucide-react';
import { FeatureCard } from '../component/FeatureCard';
import ContactForm from '../component/ContactForm';
import ContactInfo from '../component/ContactInfo';


const features = [
  {
    icon: ThumbsUp,
    title: 'HIGHLY QUALIFIED SERVICE',
    description: 'Travel with confidence, knowing that our highly qualified team will handle every detail of your journey with precision and care.'
  },
  {
    icon: Trophy,
    title: 'HANDPICKED HOTELS',
    description: 'Discover exclusive stays at our handpicked hotels, where quality, style, and comfort come together for an unforgettable experience.'
  },
  {
    icon: Heart,
    title: 'BEST PRICE GUARANTEE',
    description: 'Our Best Price Guarantee ensures you get the most affordable rates, without compromising on quality.'
  }
];

const Contact = () => {
  return (
    <>

    {/*Why choose section */}
    <div 
      className="relative bg-cover bg-center py-16 px-8" 
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80')" 
      }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-lg text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          WHY CHOOSE US?
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded transition">
            CONTACT US
          </button>
        </div>
      </div>
    </div>


    {/*Contact us form section */}
    <div className="min-h-screen bg-grey-100 flex items-center justify-center p-4">
      {/* Travel Image Section */}
      <div className="flex items-center justify-center md:w-1/4 w-full mr-12">
          <img
            src="/Images/travelGirl.jpg"
            alt="Travel Icon"
            className="w-32 h-32 md:w-96 md:h-96 object-cover rounded-full shadow-lg "
          />
        </div>
      <div className="relative w-full max-w-3xl">
        {/* Mobile: Stack vertically */}
        <div className="md:hidden space-y-6">
          <ContactInfo />
          <div className="bg-white rounded-lg shadow-lg p-8">
            <ContactForm />
          </div>
        </div>

        {/* Desktop: Overlapping layout */}
        <div className="hidden md:block">
          <div className="bg-white rounded-lg shadow-lg p-8 ml-32">
            <div className="ml-48">
              <ContactForm />
            </div>
          </div>
          <ContactInfo />
        </div>
      </div>
    </div>

    
    {/*News/Update section */}
    <div className="bg-gray-100 py-6">
      <div className="max-w-xl md:max-w-4xl lg:max-w-6xl mx-auto bg-white shadow-md rounded-md p-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-700 mb-4 md:mb-0">
            NEWS & UPDATES
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-2">
            <input
              type="text"
              placeholder="Name"
              className="p-2 w-full md:w-auto border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-2 w-full md:w-auto border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition">
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </div>

    
    </>
  );
};

export default Contact;