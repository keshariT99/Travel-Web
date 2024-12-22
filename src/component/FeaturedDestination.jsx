import React from 'react'


const destinations = [
    {
        image: '/Images/colombo.jpg',
        title: 'Colombo, Sri Lanka',
        description: 'Colombo is the executive and judicial capital and largest city of Sri Lanka by population. The geography of Colombo consists of both land and water. The city has many canals and, in the heart of the city, the 65-hectare Beira Lake.'
    },
    {
        image: '/Images/sigiriya.jpg',
        title: 'Sigiriya, Sri Lanka',
        description: 'Sigiriya or Sinhagiri is an ancient rock fortress located in Matale district. It is a site of historical and archaeological significance that is dominated by a massive column of rock approximately 180 metres high.'
    },
    {
        image: '/Images/kandy.jpg',
        title: 'Kandy, Sri Lanka',
        description: "Kandy is located at the center of Sri Lanka and is generally recognized as the island nation's cultural capital. It is on the UNESCO World Heritage List."
    },
    {
        image: '/Images/galle.jpg',
        title: 'Galle, Sri Lanka',
        description: "Galle is a major city in Sri Lanka, situated on the southwestern. It's known for some of its popular attractions, which include: Sea Turtle Farm, Dutch Fort"
    }
   
]

const FeaturedDestination = () => {

  return (
    <div className='py12 bg-gray-100'>
        <div className='container mx-auto px-8 mb-5'>
            <h2 className='text-3xl font-bold text-center mb-8'>Popular Destinations</h2>
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
                {destinations.map((city, index) =>(
                    <div key={index} className='bg-white rounded-lg shadow-md overflow-hidden cursor-pointer'>
                        <img src={city.image} alt={city.title} className='w-full h-48 object-cover
                        transform transition duration-300 hover:scale-110 ' />
                        <div className='p-4'>
                            <h3 className='text-xl font-bold mb-2'>{city.title}</h3>
                            <p className='text-gray-600'>{city.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default FeaturedDestination