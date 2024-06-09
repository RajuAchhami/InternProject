import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { TopComponents } from '../features/TopComponents'

const RootLayout = () => {
  return (
   <>
   {/* <Header /> */}
<TopComponents/>
   {/* <Outlet /> */}


   </>
  )
}

export default RootLayout