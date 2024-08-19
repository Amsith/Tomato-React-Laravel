import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import './Admin.css'

const Admin = () => {
  return (
    <>
      <div className='admin-container'>
        <div className='sidebar'>

        <NavLink to='/admin/create'><h3>Create</h3></NavLink>
        <NavLink to='/admin/table' ><h3>Table</h3></NavLink>
        </div>
        
        <div className='admin-content'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Admin
