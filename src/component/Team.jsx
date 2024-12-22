import React from 'react'
import TeamMember from './TeamMember';

const teamMembers = [
  {
    name: 'Ashley Spencer',
    role: 'Trip Leader',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
  },
  {
    name: 'Teresa Mendes',
    role: 'Trip Leader',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
  },
  {
    name: 'Samuel Owen',
    role: 'Trip Leader',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
  },
  
];

const Team = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Our team</h2>
        <p className="text-gray-600 text-center mb-12 italic">
          "People forget years and remember moments"
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team