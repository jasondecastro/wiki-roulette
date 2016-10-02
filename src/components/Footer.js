import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="well">       
        <p>Use the <code>left</code> and <code>right</code> arrows to move forward and back</p>	
        <p>Made with ♥ by <a target="_blank" href="https://twitter.com/jasonrdecastro">Jason Decastro</a></p>
      </div>
    )
  }
}

module.exports = Footer