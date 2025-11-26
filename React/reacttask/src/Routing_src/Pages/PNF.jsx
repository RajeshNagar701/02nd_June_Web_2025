import React from 'react'
import { Link } from 'react-router-dom'

function PNF() {
  return (
    <div className='bg-primary text-white text-centre p-5'>
        <h1>404</h1>
        <h3>Page Not Found</h3>
        <Link to="/" className='text-white'>Back To Home</Link>
    </div>
  )
}

export default PNF