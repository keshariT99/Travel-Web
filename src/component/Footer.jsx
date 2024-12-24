import React from "react";
import { useNavigate } from 'react-router-dom'
import { Phone, MapPin, Clock, Plane } from 'lucide-react';
import { FaTwitter, FaFacebookF, FaGoogle, FaSkype, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const navigate = useNavigate();
    const recentTrips = [
        {
          id: 1,
          image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&q=80&w=400&h=300",
          alt: "Japan Castle"
        },
        {
          id: 2,
          image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&q=80&w=400&h=300",
          alt: "Prague Street"
        },
        {
          id: 3,
          image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=400&h=300",
          alt: "Santorini"
        },
        {
          id: 4,
          image: "https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?auto=format&fit=crop&q=80&w=400&h=300",
          alt: "London Bridge"
        },
        {
          id: 5,
          image: "https://images.unsplash.com/photo-1524168272322-bf73616d9cb5?auto=format&fit=crop&q=80&w=400&h=300",
          alt: "Tokyo Night"
        },
        {
          id: 6,
          image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80&w=400&h=300",
          alt: "Golden Gate Bridge"
        },
    ];

  return (
    <footer className="bg-black text-white relative top-20">
      {/* Top Section (Shifted Upwards) */}
      <div
        className="absolute -top-12 left-20 right-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-6 px-12 shadow-lg"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-3xl font-poppins font-semibold mb-2">Try Our Tour Today!</h2>
          </div>
          <div className="flex space-x-4 ml-20">
            <button 
            onClick={()=> navigate('/signup')} 
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition" >
              Sign up →
            </button>
            <button 
            onClick={()=> navigate('/login')}
            className="border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-600 transition">
              Sign In →
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-20 p-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Company Info</h3>
            <div className="flex items-center space-x-3">
            <img
              src="/Images/logo.png" alt="Company Logo" className="w-16 h-16"/>
              <span className="text-rose-500 text-2xl font-bold">TravelBug</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              A good plus of traveling is that often you get new skills without difficulty and without even noticing it.
            </p>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contacts</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="text-rose-500" />
                <span>011-456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-rose-500" />
                <span>Nugegoda, Sri Lanka</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="text-rose-500" />
                <span>Mon - Sat 8.00 - 18.00</span>
              </div>
              <div className="flex space-x-4 mt-6">
                <a href="#twitter" className="bg-rose-500 p-3 rounded-full hover:bg-rose-600 transition-colors">
                  <FaTwitter className="text-white" size={24} />
                </a>
                <a href="#facebook" className="bg-rose-500 p-3 rounded-full hover:bg-rose-600 transition-colors">
                  <FaFacebookF className="text-white" size={24} />
                </a>
                <a href="#google" className="bg-rose-500 p-3 rounded-full hover:bg-rose-600 transition-colors">
                  <FaGoogle className="text-white" size={24} />
                </a>
                <a href="#skype" className="bg-rose-500 p-3 rounded-full hover:bg-rose-600 transition-colors">
                  <FaSkype className="text-white" size={24} />
                </a>
                <a href="#instagram" className="bg-rose-500 p-3 rounded-full hover:bg-rose-600 transition-colors">
                  <FaInstagram className="text-white" size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Recent Trips */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Recent Trips</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {recentTrips.map((trip) => (
                <div
                  key={trip.id}
                  className="relative overflow-hidden rounded-lg aspect-square group"
                >
                  <img
                    src={trip.image}
                    alt={trip.alt}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                  />
                  {/*<div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />*/}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-2 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TravelPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
