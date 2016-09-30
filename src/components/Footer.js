import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="well">
        <p>
        <a href="#"><strong>Install the Chrome Extension<br/></strong></a>
        <a href="http://wikiroulette.co/about.html">About WikiRoulette</a></p>
        <p>Use the <code>left</code> and <code>right</code> arrows to move forward and back</p>	
        <p>Made with ♥ at <a target="_blank" href="http://learn.co/jasondecastro">Flatiron School</a></p>
      </div>
    )
  }
}

module.exports = Footer