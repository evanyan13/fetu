import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const model = 'camry';
const api_url = `https://api.api-ninjas.com/v1/cars?model=${model}`;

export async function getCars(): Promise<any> {
    try {
        const response = await axios.get(api_url, { headers: { 'X-Api-Key': process.env.API_KEY } });
        const result = response.data;
        return result;
    } catch (error) {
        console.error('Error:', error.response.status, error.response.data);
    }
}

export async function calculateCarRent(city_mpg: number, year: number) {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
}
