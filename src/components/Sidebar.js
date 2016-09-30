import React, { Component } from 'react';
import Buttons from './Buttons';
import Footer from './Footer';

class Sidebar extends Component {
  render() {
    return (
      <div>
        <div className="buttons">
          <button className="btn btn-block btn-primary nav-forward">
            NEXT <span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
          </button>
          <button className="btn btn-block btn-default btn-sm nav-back" disabled="disabled">
            PREVIOUS
          </button>
          <hr/>
          <a href="" id="newTab" target="_blank" className="btn btn-sm btn-block btn-default btn-alt">View on Wikipedia</a>
        </div>

        <Footer />
      </div>
    )
  }
}

module.exports = Footer