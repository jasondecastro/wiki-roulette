import React, { Component } from 'react'

class Buttons extends Component {
  render() {
    return (
      <div className="buttons">
        <button onClick={this.props.nextArticle} className="btn btn-block btn-primary nav-forward">
          NEXT <span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
        </button>
        <button onClick={this.props.previousArticle} className="btn btn-block btn-default btn-sm nav-back" disabled={this.props.state.articles.indexOf(this.props.state.currentArticle) === 0}>
          PREVIOUS
        </button>
        <hr/>
        <a href={"http://wikipedia.org/wiki/" + this.props.state.currentArticle} id="newTab" target="_blank" className="btn btn-sm btn-block btn-default btn-alt">View on Wikipedia</a>
      </div>
    )
  }
}

module.exports = Buttons