import React from 'react'
import { NavLink } from 'react-router-dom'

function ErrorPage() {
    const links = (
      <>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        
      </>
    );
  return (
    <div>
        <h3 className='text-5xl'>Page Not Found !!</h3>
        <h4>Status: 404</h4>
        <div className="">
        <ul className="">{links}</ul>
      </div>
    </div>
  )
}

export default ErrorPage