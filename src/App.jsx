// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import { Home } from './Pages/Home'
// import  Doctors from './Pages/Doctors'
// import Login from './Pages/Login'
// import About from './Pages/About'
// import Contact from './Pages/Contact'
// import MyProfile from './Pages/MyProfile'
// import MyAppointments from './Pages/MyAppointments'
// import Appointment from './Pages/Appointment'; 
// import Navbar from './Components/Navbar'
// // import './App.css';
// import './index.css';
// import Footer from './Components/Footer'

// const App = () => {
//   return (
//     <div className='mx-4 sm:mx-[10%]'>
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Home />}/>
//         <Route path='/doctors' element={<Doctors />}/>
//         <Route path='/doctors/:speciality' element={<Doctors />}/>
//         <Route path='/login' element={<Login />}/>
//         <Route path='/about' element={<About/>} />
//         <Route path='/Contact' element={<Contact/>} />
//         <Route path='/my-profile' element={<MyProfile/>} />
//         <Route path='/my-appointments' element={<MyAppointments/>} />
//         <Route path='/appointment/:docID' element={<Appointment/>} />
//       </Routes>
//       <Footer/>
//     </div>
//   )
// }

// export default App


import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import Doctors from './Pages/Doctors';
import Login from './Pages/Login';
import About from './Pages/About';
import Contact from './Pages/Contact';
import MyProfile from './Pages/MyProfile';
import MyAppointments from './Pages/MyAppointments';
import Appointment from './Pages/Appointment'; // Corrected import
import Navbar from './Components/Navbar';
import './index.css'; // Corrected import
import Footer from './Components/Footer';

const App = () => {
    return (
        <div className="mx-4 sm:mx-[10%]">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/doctors/:speciality" element={<Doctors />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} /> {/* Corrected path */}
                <Route path="/my-profile" element={<MyProfile />} />
                <Route path="/my-appointments" element={<MyAppointments />} />
                <Route path="/appointment/:docID" element={<Appointment />} /> {/* Corrected prop name */}
            </Routes>
            <Footer />
        </div>
    );
};

export default App;