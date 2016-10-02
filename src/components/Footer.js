import React, { Component } from 'react'
import { Link } from 'react-router'

const heartStyle = {
  color: '#c7254e'
}

class Footer extends Component {
  render() {
    return (
      <div className="well">
        <p>
        <a target="_blank" href="https://chrome.google.com/webstore/detail/wikiroulette/fhahkjoaokdmndcggfbcfgppjnndaech"><strong>Install the Chrome Extension<br/></strong></a>
        <Link to='/about'>About WikiRoulette</Link></p>
        <p>Use the <code>left</code> and <code>right</code> arrows to move forward and back</p>	
        <p>Made by <a target="_blank" href="https://twitter.com/jasonrdecastro">@jasonrdecastro</a><br />with <span style={heartStyle}>♥</span> at <a target="_blank" href="http://learn.co/jasondecastro">The Flatiron School</a></p>
      </div>
    )
  }
}

module.exports = Footer