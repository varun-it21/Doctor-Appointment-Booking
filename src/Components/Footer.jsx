import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='md:mx-10'>
      {/* Grid for Footer Content */}
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* Left Side */}
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="HealthHub Logo" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>
            At HealthHub, we are dedicated to making healthcare accessible and hassle-free. Our platform connects you with trusted doctors, specialists, and healthcare professionals, allowing you to book appointments effortlessly. Whether you need routine check-ups or expert consultations, HealthHub ensures a seamless experience with verified doctors and secure bookings.
          </p>
        </div>

        {/* Center Section */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* Right Side */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+1-123-456-7890</li>
            <li>healthhub@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="w-full">
        <hr className="my-4" />
        <p className='py-5 text-sm text-center'>
          Copyright 2025@ Healthhub - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;