import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import App from './components/App'
import About from './components/About'

import './index.css'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="about" component={About} />
  </Router>,
  document.getElementById('root')
)
