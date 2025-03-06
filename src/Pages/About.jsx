import React from 'react'
import { assets } from '../assets/assets'
const About = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
          <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>

      <div className='text-xl my-4'  >
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>
        
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8 mt-8">
  
  {/* Efficiency Card */}
  <div className="bg-white-100 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:bg-blue-600 group">
    <b className="text-lg text-gray-900 group-hover:text-white">Efficiency:</b>
    <p className="text-gray-700 mt-2 group-hover:text-white">Streamlined appointment scheduling that fits into your busy lifestyle.</p>
  </div>

  {/* Convenience Card */}
  <div className="bg-white-100 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:bg-blue-600 group">
    <b className="text-lg text-gray-900 group-hover:text-white">Convenience:</b>
    <p className="text-gray-700 mt-2 group-hover:text-white">Access to a network of trusted healthcare professionals in your area.</p>
  </div>

  {/* Personalization Card */}
  <div className="bg-white-100 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:bg-blue-600 group">
    <b className="text-lg text-gray-900 group-hover:text-white">Personalization:</b>
    <p className="text-gray-700 mt-2 group-hover:text-white">Tailored recommendations and reminders to help you stay on top of your health.</p>
  </div>

</div>

    </div>
  )
}

export default About
