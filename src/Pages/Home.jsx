import React from 'react'
import Header from '../Components/Header'
import Speciality from '../Components/Speciality'
import TopDoctors from '../Components/TopDoctors'
import Banner from '../Components/Banner'

export const Home = () => {
  return (
    <div>
        <Header/>
        <Speciality/>
        <TopDoctors/>
        <Banner/>
    </div>
  )
}
