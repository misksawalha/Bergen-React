import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '.././Navbar/Navbar'
import Work from '../Work/Work'
import About from '../About/About'
import OurService from '../OurService/OurService'
import Projects from './../Projects/Projects';
import Contact from '.././Contact/Contact'
import Footer from '.././Footer/Footer'
import Residential from '../Residential/Residential'
import Commercial from '../Commercial/Commercial'
import Experiential from '../Experiential/Experiential'
import NotFound from './../NotFound/NotFound';
export default function App() {
  return (
    <>
     <Navbar />
    <Routes >
      <Route path='work' element={<Work/>}></Route>
      <Route path='/' element={<Work/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='service' element={<OurService/>}> </Route>
      <Route path='project' element={<Projects/>}></Route>
      <Route path='contact' element={<Contact/>}></Route>
      <Route path='Residential' element={ <Residential />}></Route>
      <Route path='Commercial' element={ <Commercial />}></Route>
      <Route path='Experiential' element={ <Experiential />}></Route>

    </Routes>
    <Footer />
    

    </>
  )
}
