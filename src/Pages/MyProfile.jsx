import React, { useState } from 'react';
import { assets } from '../assets/assets';

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: 'richardjameswap@gmail.com',
    phone: '+91 98672-43567',
    address: {
      line1: "123, 4th Main Road, Anna Nagar,",
      line2: "Chennai, Tamil Nadu - 600040, India"
    },
    gender: "Male",
    dob: '2000-01-20'
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
      
      {/* Profile Image & Name */}
      <div className="flex items-center gap-6 mb-6">
        <img src={userData.image} alt="" className="w-24 h-24 rounded-full border-2 border-gray-300" />
        {
          isEdit
            ? <input type="text" value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} className="text-xl font-semibold text-gray-800 border border-gray-300 rounded-md px-2 py-1" />
            : <p className="text-2xl font-semibold text-gray-800">{userData.name}</p>
        }
      </div>

      <hr className="border-gray-300 my-4" />

      {/* Contact Information */}
      <div className="mb-6">
        <p className="text-lg font-semibold text-gray-800 mb-2">CONTACT INFORMATION</p>
        <div className="space-y-2">
          
          {/* Email */}
          <p className="text-gray-600">Email id:</p>
          <p className="text-blue-600 font-medium break-all">{userData.email}</p>

          {/* Phone */}
          <p className="text-gray-600">Phone:</p>
          {
            isEdit
              ? <input type="text" value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} className="border border-gray-300 rounded-md px-2 py-1 w-full" />
              : <p className="text-green-600 font-medium">{userData.phone}</p>
          }

          {/* Address */}
          <p className="text-gray-600">Address:</p>
          {
            isEdit
              ? <div className="space-y-1">
                <input onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={userData.address.line1} type="text" className="border border-gray-300 rounded-md px-2 py-1 w-full" />
                <input onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={userData.address.line2} type="text" className="border border-gray-300 rounded-md px-2 py-1 w-full" />
              </div>
              : <p className="text-gray-700">{userData.address.line1} <br /> {userData.address.line2}</p>
          }
        </div>
      </div>

      {/* Basic Information */}
      <div className="mb-6">
        <p className="text-lg font-semibold text-gray-800 mb-2">BASIC INFORMATION</p>
        <div className="space-y-2">
          <p className="text-gray-600">Gender:</p>
          {
            isEdit
              ? <select onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender} className="border border-gray-300 rounded-md px-2 py-1 w-full">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              : <p className="text-gray-700">{userData.gender}</p>
          }

          <p className="text-gray-600">Birthday:</p>
          {
            isEdit
              ? <input type="date" onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob} className="border border-gray-300 rounded-md px-2 py-1 w-full" />
              : <p className="text-gray-700">{userData.dob}</p>
          }
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        {
          isEdit
            ? <button onClick={() => setIsEdit(false)} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">Save Information</button>
            : <button onClick={() => setIsEdit(true)} className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition">Edit</button>
        }
      </div>

    </div>
  );
}

export default MyProfile;
