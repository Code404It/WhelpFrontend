import React from 'react'
import {connect} from 'react-redux'
import {newReview} from '../actions/newReview'


class ReviewInfo extends React.Component {

  state = {
    agreeable: "Aye!",
    points: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleSubmit(this.state, this.props.kid.id)
    this.setState({
      agreeable: 'Aye!',
      points: ''
    })
  }

  //handleSubmit = (event) => {
    //event.preventDefault()
    //this.props.handleSubmit(this.state, this.props.kid.id)
    //this.setState({
     // agreeable: 'Nah Fam!',
      //points: ''
    //})
 // }





  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <label>Kid:</label>
          <input onChange={this.handleChange} name="kid_id" type="text" value={this.state.kid_id}/>
          <label>Date:</label>
          <input onChange={this.handleChange} name="date" type="text" value={this.state.date}/>
          <label>Review Headline:</label>
          <input onChange={this.handleChange} name="title" type="text" value={this.state.title}/>
          <label>Review Body:</label>
          <input onChange={this.handleChange} name="description" type="text" value={this.state.description}/>
          <label>How Would You Rate This:</label>
          <input onChange={this.handleChange} name="score" type="text" value={this.state.score}/>
          <label>How Will You Handle This?:</label>
          <select name="agreeable" onChange={this.handleChange} value={this.state.agreeable}>
            <option value="Aye!">Aye!</option>
            <option value="Nah Fam!">Nah Fam!</option>
          </select>
          <label>Review Points:</label>
          <input onChange={this.handleChange} name="points" type="text" value={this.state.points}/>
          <input type="submit" value={"Submit"}/>
        </form>
      </div>
    )
  }
}


export default connect(null, {newReview})(ReviewInfo)