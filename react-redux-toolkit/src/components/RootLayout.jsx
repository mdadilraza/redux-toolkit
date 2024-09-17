import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './NavbarPanel'
import NavbarPanel from './NavbarPanel'
const RootLayout = () => {
  return (
   <>
    <NavbarPanel/>

<main>
<Outlet/>    
</main>
   </>
  )
}

export default RootLayout