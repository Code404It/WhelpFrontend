import React from 'react'
import {connect} from 'react-redux'
import { Route, Switch } from 'react-router-dom';
import { withRouter } from "react-router";
import {fetchKids} from '../actions/fetchKids'
import Kids from '../components/Kids'
import Kid from '../components/Kid'
import KidInfo from '../components/KidInfo'

class KidsContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {kids: [], totalDiscipline_Level: 0}
  }

  componentDidMount() {
    fetch('http://localhost:3000/kids')
    .then(resp => resp.json())
    .then(kids => {
      let total = this.totalDiscipline_Level(kids)
      this.setState({
        kids: kids,
        totalDiscipline_Level: total
      })
    })
  }

  totalDiscipline_Level = (kids) => {
    let total = 0
    kids.map(k => total += k.discipline_level)
    return total
  }

  addToTotalDiscipline_Level = (kid) => {
    let total = 0
    this.state.kids.map(k => k.id !== kid.id ? total += k.discipline_level : 0)
    total += kid.discipline_level
    return total
  }

  handleSubmitKid = (kid) => {
     //event.preventDefault()
      fetch('http://localhost:3000/kids', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(kid)
      })
      .then(response => response.json())
      .then(kid => {
        debugger
        let total = this.addToTotalDiscipline_Level(kid)
        this.setState({kids: [...this.state.kids, kid], totalDiscipline_Level: total})
        this.props.history.push(`/kids/${kid.id}`)
      })
  }

  handleSubmitReview = (review, kidId) => {
    fetch(`http://localhost:3000/kids/${kidId}/reviews`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(review)
    })
    .then(response => response.json())
    .then(kid => {

      let total = this.addToTotalDiscipline_Level(kid)
      this.setState({kids: this.state.kids.map(k => k.id === kid.id ? kid : k), totalDiscipline_Level: total})
      this.props.history.push(`/kids/${kidId}`)
    })
  }


  render() {
      return (
          <span>
            <span style={{display: 'inline', float: 'right'}}>Total Self Control: {this.state.totalDiscipline_Level}</span>
            <Switch>
                <Route path='/kids/new' render={(rProps) => <KidInfo handleSubmit={this.handleSubmitKid}/>}/>
                <Route path='/kids/:id' render={(rProps) => <Kid {...rProps} handleSubmit={this.handleSubmitReview} kids={this.state.kids}/>}/>
                <Route exact path='/kids' render={(routerProps) => <Kids {...routerProps} kids={this.state.kids}/>}/>
            </Switch>
          </span>
      )
  }
}

const mapStateToProps = state => {
   return {
     kids: state.kids,
     totalDiscipline_Level: state.totalDiscipline_Level
   }
 }

export default withRouter(connect(mapStateToProps, {fetchKids})(KidsContainer))
