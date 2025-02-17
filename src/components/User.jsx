import React from 'react'
import { Link } from 'react-router-dom'
const User = () => {
  return (
    <div>
      <center>
        <h2>USER DASHBOARD</h2>
        <nav>
            <br></br>
            <Link to="/d">Browse Jobs</Link> <br></br> <br></br>
            <Link to="/applied jobs">View applied jobs</Link>
        </nav>
        </center>
    </div>
  )
}

export default User