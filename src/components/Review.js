import React from 'react'
//import {Route, Link, Redirect } from 'react-router-dom';


const Review = (props) => {
  let review = props.reviews.filter(review => review.id.toString() === props.match.params.id)[0]
  return (
    <div>
      <h3>
      {review ? review.kid_id : null} - {review ? kid.date : null} - {review ? review.score : null} - {review ? review.points : null} - {review ? review.title : null} - {review ? review.description : null}
      {props.review.agreeable} - {props.review.points}
      </h3>
    </div>

  )
}

export default Review 


