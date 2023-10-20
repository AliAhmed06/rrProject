import StoreProvider from '../stores/StoreProvider';
import Footer from './components/Footer'
import Navbar from './components/navbar/Navbar'
import './globals.css'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />
        <StoreProvider>
          {/* <Navbar /> */}
          <div className='min-h-[500px]'>
            {children}
          </div>
          {/* <Footer /> */}
        </StoreProvider>
        
      </body>
    </html>
  )
}
