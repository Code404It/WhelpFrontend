import React from 'react'
//import Review from './Review'
import {connect} from 'react-redux'
//import { Route, Link } from 'react-router-dom';

const Reviews = (props) => {

  return (
    <div>
      {props.reviews.map(review =>
      <li key={review.id}>
        <Link to={`/kids/${kidId}/reviews`}>
          {review.kid_id}{review.date}{review.score}{review.points}{review.title}{review.description}{review.agreeable}</Link>
      </li>)}
    </div>

  )
}

export default connect()(Reviews)
