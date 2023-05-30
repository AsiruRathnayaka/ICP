import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './LandingScreen/Components/Header'

const LandingContainer = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    
    </>
  )
}

export default LandingContainer
