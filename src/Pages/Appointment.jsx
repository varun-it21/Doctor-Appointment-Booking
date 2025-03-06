// import React, { useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { AppContext } from '../Context/Context';
// import * as assets from '../assets/assets';
// import RelatedDoctors from '../Components/RelatedDoctors';

// const Appointment = () => {
//     const { docID } = useParams();
//     const { doctors, currencySymbol } = useContext(AppContext);
//     const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
//     const [docInfo, setDocInfo] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);
//     const [docSlots, setdocSlots] = useState([]);
//     const [slotIndex, setSlotIndex] = useState(0);
//     const [slotTime, setSlotTime] = useState('');

//     useEffect(() => {
//         setIsLoading(true);

//         const fetchDocInfo = async () => {
//             try {
//                 if (doctors && docID) {
//                     const foundDocInfo = doctors.find((doc) => doc._id === docID);
//                     if (foundDocInfo) {
//                         setDocInfo(foundDocInfo);
//                         console.log('Doctor Found:', foundDocInfo);
//                     } else {
//                         console.log('No matching doctor found for docID:', docID);
//                         setDocInfo(null);
//                     }
//                 } else {
//                     console.log('Doctors or docID is not yet available.');
//                     setDocInfo(null);
//                 }
//             } catch (error) {
//                 console.error('Error fetching doctor info:', error);
//                 setDocInfo(null);
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         fetchDocInfo();
//     }, [doctors, docID]);

//     useEffect(() => {
//         if (docInfo) {
//             getAvailableSlots();
//         }
//     }, [docInfo]);

//     useEffect(() => {
//         console.log(docSlots);
//     }, [docSlots]);

//     const getAvailableSlots = () => {
//         setdocSlots([]);

//         // getting current date
//         let today = new Date();

//         for (let i = 0; i < 7; i++) {
//             // getting date
//             let currentDate = new Date(today);
//             currentDate.setDate(today.getDate() + i);

//             // setting and time of date
//             let endTime = new Date();
//             endTime.setDate(today.getDate() + i);  // Correct this line to use 'i'
//             endTime.setHours(21, 0, 0, 0);

//             // setting hours
//             if (today.getDate() === currentDate.getDate()) {
//                 currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
//                 currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
//             } else {
//                 currentDate.setHours(10);
//                 currentDate.setMinutes(0);
//             }

//             let timeSlots = [];

//             while (currentDate < endTime) {
//                 let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

//                 // add slot to array
//                 timeSlots.push({
//                     datetime: new Date(currentDate),
//                     time: formattedTime
//                 });

//                 // increment current time to 30 min
//                 currentDate.setMinutes(currentDate.getMinutes() + 30);
//             }
//             setdocSlots(prev => ([...prev, timeSlots]));
//         }
//     };

//     if (isLoading) {
//         return <div>Loading...</div>;
//     }

//     if (!docInfo) {
//         return <div>Doctor not found. Please check the URL or context.</div>;
//     }


//     return (
//         <div>
//             {/* doctor details */}
//             <div className='flex flex-col sm:flex-row gap-4'>
//                 <div>
//                     <img className='bg-blue-600 w-full sm:max-w-72 rounded-lg' src={docInfo?.image} alt={docInfo?.name || "Doctor Image"} />
//                 </div>

//                 <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
//                     <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>{docInfo.name}
//                         <img className='w-5' src={assets.verified_icon} alt="" /> </p>
//                     <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
//                         <p>{docInfo.degree} - {docInfo.speciality}</p>
//                         <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
//                     </div>
//                     <div>
//                         <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon} alt="" /></p>
//                         <p className='text-sm text-gray-500 max-w-[700] mt-1'>{docInfo.about}</p>
//                     </div>
//                     <p className='text-gray-500 font-medium mt-4 '> Appointment fee : <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span></p>
//                 </div>
//             </div>

//           {/* BOOKING SLOTS  */}
//           <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
//             <p>Booking Slots</p>
//             <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
//               {
//                 docSlots.length && docSlots.map((item,index)=>(
//                   <div onClick={()=> setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-blue-600 text-white' : 'border border-gray-200'}`} key={index}>
//                   <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
//                   <p>{item[0] && item[0].datetime.getDate()}</p>
//                   </div>
//                 ))
//               }
//             </div>

//             <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
//               {docSlots.length && docSlots[slotIndex].map((item,index)=>
//               <p onClick={()=> setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-blue-600 text-white' : 'text-gray-400 border border-gray-300'}`} key={index}>
//                   {item.time.toLowerCase()}
//               </p>
//               )}
//             </div>
//             <button className='bg-blue-600 text-white text-sm font-light px-14 py-3 rounded-full my-6'>Book An Appointment</button>

//           </div>
//             {/* RelatedDoctors */}
//             <RelatedDoctors docID={docID} speciality={docInfo.speciality}/>
//         </div>
//     );
// };

// export default Appointment;

import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // ✅ Import useNavigate
import { AppContext } from '../Context/Context';
import * as assets from '../assets/assets';
import RelatedDoctors from '../Components/RelatedDoctors';

const Appointment = () => {
    const { docID } = useParams();
    const navigate = useNavigate(); // ✅ Initialize navigation
    const { doctors, currencySymbol } = useContext(AppContext);
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    const [docInfo, setDocInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [docSlots, setdocSlots] = useState([]);
    const [slotIndex, setSlotIndex] = useState(0);
    const [slotTime, setSlotTime] = useState('');
    const [showPopup, setShowPopup] = useState(false); // ✅ State for confirmation popup

    useEffect(() => {
        setIsLoading(true);
        const fetchDocInfo = async () => {
            try {
                if (doctors && docID) {
                    const foundDocInfo = doctors.find((doc) => doc._id === docID);
                    if (foundDocInfo) {
                        setDocInfo(foundDocInfo);
                    } else {
                        setDocInfo(null);
                    }
                } else {
                    setDocInfo(null);
                }
            } catch (error) {
                console.error('Error fetching doctor info:', error);
                setDocInfo(null);
            } finally {
                setIsLoading(false);
            }
        };
        fetchDocInfo();
    }, [doctors, docID]);

    useEffect(() => {
        if (docInfo) {
            getAvailableSlots();
        }
    }, [docInfo]);

    const getAvailableSlots = () => {
        setdocSlots([]);
        let today = new Date();

        for (let i = 0; i < 7; i++) {
            let currentDate = new Date(today);
            currentDate.setDate(today.getDate() + i);
            let endTime = new Date();
            endTime.setDate(today.getDate() + i);
            endTime.setHours(21, 0, 0, 0);

            if (today.getDate() === currentDate.getDate()) {
                currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
            } else {
                currentDate.setHours(10);
                currentDate.setMinutes(0);
            }

            let timeSlots = [];
            while (currentDate < endTime) {
                let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

                timeSlots.push({
                    datetime: new Date(currentDate),
                    time: formattedTime
                });

                currentDate.setMinutes(currentDate.getMinutes() + 30);
            }
            setdocSlots(prev => ([...prev, timeSlots]));
        }
    };

    // ✅ Handle Booking Function
    const handleBookAppointment = () => {
        setShowPopup(true); // Show the popup

        // Redirect after 1 second
        setTimeout(() => {
            navigate('/my-appointments');
            setShowPopup(false); // Hide popup after navigation
        }, 1000);
    };

    if (isLoading) return <div>Loading...</div>;
    if (!docInfo) return <div>Doctor not found. Please check the URL or context.</div>;

    return (
        <div>
            {/* ✅ Popup Confirmation */}
            {showPopup && (
                <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg">
                    Appointment Booked Successfully!
                </div>
            )}

            {/* doctor details */}
            <div className='flex flex-col sm:flex-row gap-4'>
                <div>
                    <img className='bg-blue-600 w-full sm:max-w-72 rounded-lg' src={docInfo?.image} alt={docInfo?.name || "Doctor Image"} />
                </div>

                <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
                    <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>{docInfo.name}
                        <img className='w-5' src={assets.verified_icon} alt="" /> </p>
                    <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
                        <p>{docInfo.degree} - {docInfo.speciality}</p>
                        <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
                    </div>
                    <div>
                        <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon} alt="" /></p>
                        <p className='text-sm text-gray-500 max-w-[700] mt-1'>{docInfo.about}</p>
                    </div>
                    <p className='text-gray-500 font-medium mt-4 '> Appointment fee : <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span></p>
                </div>
            </div>

            {/* BOOKING SLOTS  */}
            <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
                <p>Booking Slots</p>
                <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
                    {docSlots.length && docSlots.map((item, index) => (
                        <div 
                            onClick={() => setSlotIndex(index)} 
                            className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-blue-600 text-white' : 'border border-gray-200'}`} 
                            key={index}
                        >
                            <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                            <p>{item[0] && item[0].datetime.getDate()}</p>
                        </div>
                    ))}
                </div>

                <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
                    {docSlots.length && docSlots[slotIndex].map((item, index) =>
                        <p 
                            onClick={() => setSlotTime(item.time)} 
                            className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-blue-600 text-white' : 'text-gray-400 border border-gray-300'}`} 
                            key={index}
                        >
                            {item.time.toLowerCase()}
                        </p>
                    )}
                </div>

                {/* ✅ Updated Book Appointment Button */}
                <button 
                    onClick={handleBookAppointment} 
                    className='bg-blue-600 text-white text-sm font-light px-14 py-3 rounded-full my-6 cursor-pointer'
                >
                    Book An Appointment
                </button>
            </div>

            {/* RelatedDoctors */}
            <RelatedDoctors docID={docID} speciality={docInfo.speciality} />
        </div>
    );
};

export default Appointment;
