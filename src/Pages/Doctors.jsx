// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { AppContext } from "../Context/Context";
// import { doctors } from "../assets/assets.js"; // Ensure the correct path


// const Doctors = () => {
//   const { speciality } = useParams();
//   const [filterDoc, setFilterDoc] = useState([]);
//   const navigate = useNavigate();

//   const { doctors } = useContext(AppContext);

//   const applyFilter = () => {
//     if (speciality) {
//       setFilterDoc(
//         doctors.filter(
//           (doc) =>
//             doc.speciality.toLowerCase().replace(/\s+/g, "-") ===
//             speciality.toLowerCase()
//         )
//       );
//     } else {
//       setFilterDoc(doctors);
//     }
//   };

//   useEffect(() => {
//     applyFilter();
//   }, [doctors, speciality]);

//   return (
//     <div>
//       <p className="text-gray-600">Browse through the doctors specialist.</p>
//       <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
//         <div className="flex flex-col gap-4 text-sm text-gray-600">
//           {[
//             "General Physician",
//             "Gynecologist",
//             "Dermatologist",
//             "Pediatricians",
//             "Neurologist",
//             "Gastroenterologist",
//           ].map((specialtyName) => {
//             const formattedSpecialty = specialtyName.toLowerCase().replace(/\s+/g, "-");
//             return (
//               <p
//                 key={specialtyName}
//                 onClick={() =>
//                   speciality === formattedSpecialty
//                     ? navigate("/doctors")
//                     : navigate(`/doctors/${formattedSpecialty}`)
//                 }
//                 className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
//                   speciality === formattedSpecialty ? "bg-indigo-100 text-black" : ""
//                 }`}
//               >
//                 {specialtyName}
//               </p>
//             );
//           })}
//         </div>
//         <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 gap-y-6">
//           {filterDoc.map((item, index) => (
//             <div
//               onClick={() => navigate(`/appointment/${item._id}`)}
//               className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
//               key={item._id || index}
//             >
//               <img className="bg-blue-50" src={item.image} alt="" />
//               <div className="p-4">
//                 <div className="flex items-center gap-2 text-sm text-center text-green-500">
//                   <p className="w-2 h-2 bg-green-500 rounded-full"></p>
//                   <p>Available</p>
//                 </div>
//                 <p className="text-gray-900 text-lg font-medium">{item.name}</p>
//                 <p className="text-gray-600 text-sm">{item.speciality}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Doctors;


import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../Context/Context";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter,setShowFilter] = useState(false)
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext);

  useEffect(() => {
    const applyFilter = () => {
      if (doctors) {
        if (speciality) {
          const filtered = doctors.filter(
            (doc) =>
              doc.speciality.toLowerCase().replace(/\s+/g, "-") ===
              speciality.toLowerCase()
          );
          setFilterDoc(filtered);
        } else {
          setFilterDoc(doctors);
        }
      } else {
        console.log("Doctors data is not yet available.");
        setFilterDoc([]); // Set to empty array to avoid issues
      }
    };

    applyFilter();
  }, [doctors, speciality]);

  return (
    <div>
      <p className="text-gray-600">Browse through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-blue-600 text-white' : ''}`} onClick={()=>setShowFilter(prev=>!prev)}>Filters</button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          {[
            "General Physician",
            "Gynecologist",
            "Dermatologist",
            "Pediatricians",
            "Neurologist",
            "Gastroenterologist",
          ].map((specialtyName) => {
            const formattedSpecialty = specialtyName.toLowerCase().replace(/\s+/g, "-");
            return (
              <p
                key={specialtyName}
                onClick={() =>
                  speciality === formattedSpecialty
                    ? navigate("/doctors")
                    : navigate(`/doctors/${formattedSpecialty}`)
                }
                className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
                  speciality === formattedSpecialty ? "bg-indigo-100 text-black" : ""
                }`}
              >
                {specialtyName}
              </p>
            );
          })}
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 gap-y-6">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
              key={item._id || index}
            >
              <img className="bg-blue-50" src={item.image} alt={item.name} /> {/* Added alt text */}
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;