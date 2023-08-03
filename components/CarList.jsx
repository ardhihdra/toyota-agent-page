import React from 'react';
import { getSanityCarsData } from '@/data/api';
import CarListFinder from './CarListFinder';

const CarList = async () => {
  const cars = await getSanityCarsData()

  return (
    <CarListFinder cars={cars || []}/>
  );
};

export default CarList;
