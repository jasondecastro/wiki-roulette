import React, { Component } from 'react'

class Frame extends Component {
  render() {
    return (
      <div className="col-md-9 col-sm-9 col-xs-12 main-div">
        <input id="pageURL" type="text" className="form-control" value="" />
        <iframe src={this.props.src} id="mainFrame" frameBorder="0" />
      </div>
    )
  }
}

Frame.defaultProps = {
  src: '/load.html'
}

module.exports = Frame