"use client";

import { useState } from 'react';
import Image from 'next/image';

import { CarProps } from '@/types';
import CustomButton from './CustomButton';
import { calculateCarRent } from '@/utils';

interface CarCardProps {
    car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
    const { make, model, year, fuel_type, drive, transmission, class: carClass, 
        cylinders, displacement, city_mpg, highway_mpg, combination_mpg } = car;

    const carRental = calculateCarRent(city_mpg, year);

    return (
        <div
            className='car-card group'
        >
            <div className='car-card__content'>
                <h2 className='car-card__content-title'>
                    {make} {model}
                </h2>
            </div>
        </div>
    )
}

export default CarCard