import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom';

const Banner = () => {

  const navigate = useNavigate()

  return (
    <div className='flex bg-blue-600 rounded-lg px-6 sm:px-14 lg:px-12 my-20 md:mx-10'>

       {/* left side */}
       <div className='flex-1 py-8 sm:py-10 md;py-16 lg:py-24 lg:pl-5'>
            <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
              <p>Book Appointments</p>
              <p className='mt-4'>With 100+ Trusted Doctors</p>
            </div><br/>
            <button onClick={()=>{navigate('/login');scrollTo(0,0)}}  className='cursor-pointer flex items-center gap-2 bg-white px-8 py-3 h-12 rounded-full text-gray text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>Create Account</button>
       </div>

       {/* right side */}
       <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
        <img className='w-full h-120 max-h-150 absolute bottom-0 right-0' src={assets.appointment_img} alt="" />
       </div>

    </div>
  )
}

export default Banner