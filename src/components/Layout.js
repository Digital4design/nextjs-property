import React from 'react'
import Sidebar from './Sidebar';

const Layout = ({children}) => {
  return (
    <div className='wrapper h-screen'>
        <div className='container mx-auto flex flex-wrap h-full'>
            <Sidebar />
            <div className='content-area w-full lg:w-9/12 py-8 px-4 sm:px-6 lg:px-8 lg:py-12'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Layout;