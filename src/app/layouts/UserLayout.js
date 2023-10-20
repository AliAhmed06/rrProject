import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer'

const UserLayout = ({children}) => {
  return (
    <div>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}

export default UserLayout