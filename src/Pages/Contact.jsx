import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] px-6 pt-0">

      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>CONTACT <span className="text-gray-700 font-medium">US</span></p>
      </div>

 
      <div className="mt-4 flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
        
        <img className="w-full md:max-w-[400px]" src={assets.contact_image} alt="Contact" />

        <div className="flex flex-col justify-center gap-6 md:w-3/5 text-lg text-gray-700 text-center md:text-left leading-relaxed">
          <p className="text-2xl font-bold">OUR OFFICE</p>
          <p className="text-gray-600 text-lg">
            HealthHub Pvt Ltd <br /> 23, MG Road, Indiranagar <br /> Chennai, TamilNadu, India - 638038
          </p>
          <p className="text-gray-600 text-lg">
            Tel: (+91) 98765-43210 <br /> Email: healthhubcare@gmail.com
          </p>

          <p className="text-2xl font-bold">CAREERS AT PRESCRIPTO</p>
          <p className="text-gray-600 text-lg">
            Learn more about our teams and job openings.
          </p>

          <button className="bg-blue-600 text-white text-lg px-8 py-3 rounded-md hover:bg-blue-700 transition-all duration-300">
            Explore Jobs
          </button>
        </div>

      </div>

    </div>
  )
}

export default Contact
