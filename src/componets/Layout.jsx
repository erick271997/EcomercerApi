import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
function layout() {
  return (
    <>
    <Header/>  
    <Outlet/>
    <Footer/>
  
</>
  )
}

export default layout
