import React from 'react'
import {Link} from 'react-router-dom'
//import Kid from './Kid'

const Kids = (props) => {

  return (
    <div>
      {props.kids.map(kid =>
        <li key={kid.id}>
          <Link to={`/kids/${kid.id}`}>{kid.name} - ${kid.discipline_level}</Link>
        </li> )}
    </div>

  )
}

export default Kids