import React, { Component } from 'react';
import '../static/App.css';
import '../static/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-default navbar-fixed-top visible-xs">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#"><strong>WIKI</strong><span>Roulette</span></a>
              <button type="button" className="navbar-toggle collapsed nav-forward btn-primary btn-nav-forward">
                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              </button>
              <button type="button" className="navbar-toggle collapsed nav-back btn-nav-back">
                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" disabled="disabled" />
              </button>
              </div>
              <div id="navbar" className="navbar-collapse collapse">
              
        
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="about.html">About</a></li>
                </ul>
              </div>
            </div>
        </nav>


        <div className="container">
          <div className="row">  		
            <div className="col-md-9 col-sm-9 col-xs-12 main-div">
              <input id="pageURL" type="text" className="form-control" value="" />
              <iframe src="" id="mainFrame" frameborder="0" />
            </div>
            <div className="col-xs-3 visible-sm visible-md visible-lg sidebar">
              <div className="logo"><h1>Wiki<br/><small>Roulette</small></h1></div>
              <button className="btn btn-block btn-primary nav-forward">
                NEXT <span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
              </button>
              <button className="btn btn-block btn-default btn-sm nav-back" disabled="disabled">
                PREVIOUS
              </button><hr/>
              <a href="" id="newTab" target="_blank" className="btn btn-sm btn-block btn-default btn-alt">View on Wikipedia</a>
              
              <div className="well">
                <p>
                <a href="#"><strong>Install the Chrome Extension<br/></strong></a>
                <a href="http://wikiroulette.co/about.html">About WikiRoulette</a></p>
                <p>Use the <code>left</code> and <code>right</code> arrows to move forward and back</p>	
                <p>Made with ♥ at <a target="_blank" href="http://learn.co/jasondecastro">Flatiron School</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
