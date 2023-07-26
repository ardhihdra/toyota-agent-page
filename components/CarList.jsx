'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const carListData = [
  {
    id: 1,
    image: '/images/banner1.png', // Replace with car image URL
    name: 'Car Model 1',
    startingPrice: 25000,
    transmission: 'Automatic',
  },
  {
    id: 2,
    image: '/images/banner2.png', // Replace with car image URL
    name: 'Car Model 2',
    startingPrice: 28000,
    transmission: 'Manual',
  },
  {
    id: 3,
    image: '/images/banner2.png', // Replace with car image URL
    name: 'Car Model 2',
    startingPrice: 28000,
    transmission: 'Manual',
  },
  {
    id: 4,
    image: '/images/banner2.png', // Replace with car image URL
    name: 'Car Model 2',
    startingPrice: 28000,
    transmission: 'Manual',
  },
  // Add more car items as needed
];

// CarItem.js
const CarItem = ({ car }) => {
  return (
    <Link href={`/cars/${car.id}`} className="block border hover:border-stone-400 rounded-lg p-4 transition-all">
      <div className="mb-4">
        <Image src={car.image} alt={car.name} className="w-full h-52 object-cover rounded-lg" width={128} height={128}/>
      </div>
      <div className="text-center">
        <h3 className="text-lg font-bold mb-2">{car.name}</h3>
        <p>Starting Price: ${car.startingPrice}</p>
        <p>Transmission: {car.transmission}</p>
      </div>
    </Link>
  );
};

const CarList = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredCars = carListData.filter((car) =>
    car.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div id="car-list" className="w-full bg-white text-stone-800 p-24 pb-36">
      <div className="mb-16">
        <h2 className="w-full mx-auto text-center mb-6 font-bold text-3xl">Daftar Produk</h2>
        <div className="mb-6 w-96 mx-auto">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Cari berdasarkan nama..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
          />
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredCars.map((car) => (
          <CarItem key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CarList;
