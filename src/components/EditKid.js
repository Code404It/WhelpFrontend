import React from 'react'
import {connect} from 'react-redux'
import {editKid} from '../actions/editKid'

class EditKid extends React.Component {

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
    let kid = {...this.state, id: this.props.kid.id}
    this.props.editKid(kid)
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
          <label>Name: </label>
          <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/><br/>
          <label>Self Control: </label>
          <input type='text' placeholder='Discipline_Level' value={this.state.discipline_level} name="discipline_level" onChange={this.handleChange}/><br/>
          <label>The Face Only A Parent Could Love: </label>
          <input type='text' placeholder='Image_url' value={this.state.image_url} name="image_url" onChange={this.handleChange}/><br/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

EditKid.defaultProps = {
  kids: {}
}


export default connect(null, {editKid})(EditKid)