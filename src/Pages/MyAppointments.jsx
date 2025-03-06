// import React, { useContext } from 'react'
// import {AppContext} from '../Context/Context'

// const MyAppointments = () => {

//   const {doctors} = useContext(AppContext)
//   return (
//     <div>
//       <p>My Appoinments</p>
//       <div>
//       {doctors.slice(0,2).map((item,index)=>(
//         <div key={index}>
//             <div>
//               <img src={item.image} alt="" />
//             </div>
//             <div>
//               <p>{item.name}</p>
//               <p>{item.speciality}</p>
//               <p>Address :</p>
//               <p>{item.address.line1}</p>
//               <p>{item.address.line2}</p>
//               <p><span>Date & Time :</span> 25, July, 2024 | 08:30 PM</p>
//             </div>
//             <div></div>
//             <div>
//               <button>Pay Online</button>
//               <button>Cancel Appointment</button>
//             </div>
//         </div>
//       ))}
//       </div>
//     </div>
//   )
// }

// export default MyAppointments

import React, { useContext } from 'react'
import { AppContext } from '../Context/Context'

const MyAppointments = () => {
  const { doctors } = useContext(AppContext)

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
      {/* Page Title */}
      <p className="text-2xl font-semibold text-gray-800 mb-6">My Appointments</p>

      {/* Appointment List */}
      <div className="space-y-4">
        {doctors.slice(0, 3).map((item, index) => (
          <div key={index} className="flex items-center justify-between p-4 border rounded-lg shadow-sm bg-white">

            {/* Doctor Image */}
            <div>
              <img src={item.image} alt="" className="w-16 h-16 rounded-full border border-gray-300" />
            </div>

            {/* Doctor Info */}
            <div className="flex-1 ml-4">
              <p className="text-lg font-semibold text-gray-800">{item.name}</p>
              <p className="text-blue-600 font-medium">{item.speciality}</p>
              <p className="text-gray-600 mt-1">
                <strong>Address:</strong>
              </p>
              <p className="text-gray-600">{item.address.line1}</p>
              <p className="text-gray-600">{item.address.line2}</p>
              <p className="text-gray-600 mt-1">
                <strong>Date & Time:</strong> 25, July, 2024 | 08:30 PM
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2">
              <button className="px-4 py-2 border border-gray-400 text-gray-800 rounded-md transition-all duration-300 hover:bg-blue-500 hover:text-white">
                Pay Online
              </button>

              <button className="px-4 py-2 border border-gray-400 text-gray-800 rounded-md transition-all duration-300 hover:bg-red-500 hover:text-white hover:border-red-500">
                Cancel Appointment
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointments
