import React from 'react'
import { MapPin, Mail, Phone, Printer } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="bg-red-500 text-white p-8 rounded-lg shadow-lg w-full md:w-80 md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2">
    <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <MapPin className="w-5 h-5 flex-shrink-0" />
        <div>
          <p>32, Nugegoda Colombo</p>
          <p> Sri Lanka</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Mail className="w-5 h-5 flex-shrink-0" />
        <p className="break-all">hello@travelbug.com</p>
      </div>
      <div className="flex items-center gap-4">
        <Phone className="w-5 h-5 flex-shrink-0" />
        <p>+9456 1589 105</p>
      </div>
      <div className="flex items-center gap-4">
        <Printer className="w-5 h-5 flex-shrink-0" />
        <p>+9456 1589 210</p>
      </div>
    </div>
  </div>
  )
}

export default ContactInfo