import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
  return (
    <div>
        <h1>Welcome to Home Page</h1>
      <div>
        <h2>
            <Link to='/login'>Login</Link>
            </h2>
            <h2>
            <Link to='/signup'>Register</Link>
        </h2>
      </div>
      <br />
      <br />
      <br />

      
    </div>
  )
}

export default Home
