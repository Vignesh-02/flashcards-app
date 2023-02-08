import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
  return (
        <main className='flex flex-col gap-4'>
            <Header />
            <Outlet />
        </main>
    )
}

export default Layout