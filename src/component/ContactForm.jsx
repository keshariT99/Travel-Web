import React from 'react'

const ContactForm = () => {
  return (
        <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Get in Touch</h2>
            <p className="text-gray-500 mb-6">Feel free to drop us a line below!</p>
            
            <form className="space-y-4">
                <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 bg-gray-50 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-gray-50 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <textarea
                placeholder="Typing your message here..."
                rows={4}
                className="w-full px-4 py-2 bg-gray-50 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button
                type="submit"
                className="px-8 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                >
                SEND
                </button>
            </form>
        </div>
    
  )
}

export default ContactForm