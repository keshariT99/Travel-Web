import React from 'react'
import { FaConciergeBell, FaHiking, FaHotel, FaPlane, FaUmbrellaBeach } from 'react-icons/fa'


const services = [
    {
        icon: <FaHotel className='text-4xl text-blue-500'  />,
        title: 'Hotel Booking',
        description: 'Book your perfect stay for a comfortable and unforgettable getaway experience.'
    },
    {
        icon: <FaUmbrellaBeach className='text-4xl text-blue-500' />,
        title: 'Beach Tours',
        description: 'Discover pristine beaches and soak in the sun with our expertly curated beach tours.'
    },
    {
        icon: <FaHiking className='text-4xl text-blue-500' />,
        title: 'Hiking',
        description: "Embark on breathtaking hikes and explore nature's wonders with guided adventures."
    },
    {
        icon: <FaConciergeBell className='text-4xl text-blue-500' />,
        title: 'Concierge Services',
        description: "Get personalized concierge services for a seamless and stress-free travel experience."
    },
   
]

const Services = () => {

  return (
    <div className='py12 bg-gray-100 m-20'>
        <div className='container mx-auto px-8'>
            <h2 className='text-3xl font-bold text-center mb-8'>Our Servises</h2>
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
                {services.map((services, index) =>(
                    <div key={index} className='bg-white rounded-lg shadow-md flex flex-col p-8 items-center cursor-pointer
                    transform transition duration-300 hover:scale-110'>
                        <div className='mb-4' >{services.icon}</div>
                        
                            <h3 className='text-xl font-bold mb-2'>{services.title}</h3>
                            <p className='text-gray-600'>{services.description}</p>
                        
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Services