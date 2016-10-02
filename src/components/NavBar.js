import React, { Component } from 'react'
import { Link } from 'react-router'

const navStyle = {
  display: 'none'
}

const spanStyle = {
  fontWeight: 300
}

class NavBar extends Component {
  render() {
    return (
        <nav className="navbar navbar-default navbar-fixed-top visible-xs" style={navStyle}>
          <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#"><strong>WIKI</strong><span style={spanStyle}>Roulette</span></a>
            <button onClick={this.props.nextArticle} type="button" className="navbar-toggle collapsed nav-forward btn-primary btn-nav-forward">
              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            </button>
            <button onClick={this.props.previousArticle} type="button" className="navbar-toggle collapsed nav-back btn-nav-back">
              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" disabled={this.props.state.articles.indexOf(this.props.state.currentArticle) === 0}></span>
            </button>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="about">About</Link></li>
              </ul>
            </div>
          </div>
        </nav>
    )
  }
}

module.exports = NavBar