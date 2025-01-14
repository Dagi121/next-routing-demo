import React from 'react'

export default function Register() {
  return (
    <div>
      <h1>Register</h1>
      <div className='p-3'>
        <input className='mb-2 block border-solid border-2 shadow-lg p-3 '  type="text" placeholder="Enter Your Name"  />
        <input className='mb-2 block border-solid border-2 shadow-lg p-3 '  type="email" placeholder="Email"  />
        <input className='mb-2 block border-solid border-2 shadow-lg p-3 '  type="password" placeholder="password"  />
      </div>
    </div>
  )
}
