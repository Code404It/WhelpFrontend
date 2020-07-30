import React from 'react'
import {connect} from 'react-redux'
import {newKid} from '../actions/newKid'

class KidInfo extends React.Component {

  state = {
    name: '',
    discipline_level: '',
    image_url: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleSubmit(this.state)
    this.setState({
      name: '',
      discipline_level: '',
      image_url: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label> This Kid Again: </label>
          <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/><br/>
          <label> The Face Only A Parent Can Love: </label>
          <input type='text' placeholder='Insert Pic Here' value={this.state.image_url} name="image_url" onChange={this.handleChange}/><br/>
          <label>Self Control: </label>
          <input type='text' placeholder='Discipline_Level' value={this.state.discipline_level} name="discipline_level" onChange={this.handleChange}/><br/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}




export default connect(null, {newKid})(KidInfo)