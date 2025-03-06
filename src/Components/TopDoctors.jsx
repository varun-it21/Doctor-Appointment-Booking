// import React, { useContext } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { AppContext } from '../Context/Context'

// const TopDoctors = () => {

//     const navigate = useNavigate()
//     const {doctors} = useContext(AppContext)

//   return (
//     <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
//         <h1 className='text-3xl font-medium'>Top Doctors To Book</h1>
//         <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
//         <div className='w-full grid grid-cols-5 grid-rows-2 gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
//            {doctors.slice(0,10).map((item,index)=>(
//             <div onClick={()=>{navigate(`/appointment/${item._id}`); scrollTo(0,0)}} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={item._id || index}>
//                 <img className='bg-blue-50' src={item.image} alt="" />
//                 <div className='p-4'>
//                 <div className='flex items-center gap-2 text-sm text-center text-green-500'>
//                    <p className='w-2 h-2 bg-green-500 rounded-full'></p> <p>Available</p>
//                 </div>
//                 <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
//                 <p className='text-gray-600 text-sm'>{item.speciality}</p>
//                 </div>
//             </div>
//            ))} 
//         </div>
//         <button onClick={()=>{navigate('/doctors'); scrollTo(0,0)}} className='w-auto bg-blue-500 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-600 hover:scale-105 transition-all duration-300'>more</button>
//     </div>
//   )
// }

// export default TopDoctors


import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/Context';

const TopDoctors = () => {
    const navigate = useNavigate();
    const { doctors } = useContext(AppContext);

    return (
        <div className="flex flex-col items-center gap-4 my-16 text-gray-900 px-3 sm:px-6 md:px-10">
            <h1 className="text-3xl font-medium text-center">Top Doctors To Book</h1>
            <p className="sm:w-2/3 md:w-1/2 text-center text-sm">
                Simply browse through our extensive list of trusted doctors.
            </p>

            {/* Responsive Grid for Doctors */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-6 pt-5">
                {doctors.slice(0, 10).map((item, index) => (
                    <div
                        onClick={() => {
                            navigate(`/appointment/${item._id}`);
                            scrollTo(0, 0);
                        }}
                        className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-5px] transition-all duration-300"
                        key={item._id || index}
                    >
                        {/* ✅ Image now properly scales while keeping full image visible */}
                        <img 
                            className="w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 object-contain bg-blue-50" 
                            src={item.image} 
                            alt={item.name} 
                        />
                        <div className="p-4">
                            <div className="flex items-center gap-2 text-sm text-green-500">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                <p>Available</p>
                            </div>
                            <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                            <p className="text-gray-600 text-sm">{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* More Button */}
            <button
                onClick={() => {
                    navigate('/doctors');
                    scrollTo(0, 0);
                }}
                className="w-auto bg-blue-500 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-600 hover:scale-105 transition-all duration-300"
            >
                More
            </button>
        </div>
    );
};

export default TopDoctors;
