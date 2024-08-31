import React from 'react'
import { Link } from 'react-router-dom'
import Update from './Update'

const Admin = () => {
  return (
    <div className = 'add mt-5'>
        <Link to = "/upload" className = 'btn btn-dark'>Add on</Link>
        <Update/>
    </div>
  )
}

export default Admin