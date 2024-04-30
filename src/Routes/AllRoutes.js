import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Search from '../Pages/Search'
import Detailes from '../Pages/Detailes'


export const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/detailes' element={<Detailes/>}/>
    </Routes>
  )
}
