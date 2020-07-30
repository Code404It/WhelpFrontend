import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = (props) => {

  return (
    <span>
      <Link to='/'> Whelp Home </Link>
      <Link to='/kids'>Kids </Link>
      <Link to= '/kids/:kid_id/reviews'>Reviews</Link>
      <Link to='/kids/new'> New Kid</Link>
      <Link to= '/kids/:kid_id/reviews/new'>New Review</Link>
    </span>

  )
}

export default NavBar