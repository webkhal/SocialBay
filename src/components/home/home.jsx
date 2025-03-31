import React from 'react'
import { Link } from 'react-router-dom'

function home() {
  return (
 <>
 <nav>
    <li>  
<Link to={"/login"}> login</Link>
</li>
 </nav>
 </>
  )
}

export default home