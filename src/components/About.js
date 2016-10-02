import React, { Component } from 'react'
import { Link } from 'react-router'

const mainStyle = {
  paddingLeft: '100px',
  paddingRight: '100px',
  paddingTop: '55px'
}

const paddingStyle = {
  padding: '50px'
}

class About extends Component {
  render() {
    return (
      <div className="main" style={mainStyle}>
        <div className="panel" style={paddingStyle}>
          <div className="header">
            <h1>About WikiRoulette</h1>
            <hr/>
            <br/>
          </div>
          <div className="body">
            <p>
              This project was originally created by <a href="https://twitter.com/minouye">Matt Inouye</a>. I fell in love with the concept and decided to recreate this from scratch using React.
            </p>

            <p>
              My name is <a href="https://twitter.com/jasonrdecastro">Jason Decastro</a> and I'm currently a student at <a href="https://flatironschool.com">The Flatiron School</a>, which is a 3-month intensive coding bootcamp. We have been learning React + Redux for the past couple of weeks.
            </p>

            <p>
              All of the code is hosted on <a href="https://github.com/jasondecastro/wikiroulette">this GitHub repository</a>.
            </p>
            <hr />
            <br />
            <p>
              <Link to="/">← Back to the site</Link>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = About