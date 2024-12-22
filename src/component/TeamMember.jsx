import React from 'react'

const TeamMember = ({ name, role, image }) => {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />
        <h3 className="text-xl font-semibold text-center mb-2">{name}</h3>
        <p className="text-gray-600 text-center">{role}</p>
      </div>
  )
}

export default TeamMember