import React from 'react'
//import {connect} from 'react-redux'
import { Route, Link } from 'react-router-dom';
import ReviewInfo from '../components/ReviewInfo'
import Reviews from '../components/Reviews'


class ReviewsContainer extends React.Component {

  renderRoutes = () => {
    if (this.props.kid) {
      return (
        <div>
          <Route path="/kids/:id/reviews/new" render={(rProps) => <ReviewInfo handleSubmit={this.props.handleSubmit} history={this.props.history} kid={this.props.kid}/>}/>
          <Link to={`/kids/${this.props.kid.id}/reviews/new`}>New Whelp!</Link>
          {this.props.urlMatch.isExact ? <Reviews reviews={this.props.kid.reviews}/>: null}
        </div>
      )
    } else {
      return null
    }

  }

  render() {
      return (
          <div>
            {this.renderRoutes()}
          </div>
      )
  }
}



export default ReviewsContainer