import React, { Component } from 'react'

import '../static/App.css'
import '../static/bootstrap.min.css'

import Frame from './Frame'
import Footer from './Footer'
import Buttons from './Buttons'

class App extends Component {
  constructor() {
    super()
    
    this.state = {
      articles: [],
      currentArticle: ''
    }
  }

  nextArticle() {
    debugger
  }

  getArticles() {
    const url = 'https://en.wikipedia.org/w/api.php?action=query&list=random&rnnamespace=0&rnlimit=10&format=json&origin=*'
    
    return fetch(url).then(response => {
      return response.json()
    }).then(articles => {
      return articles
    })
  }

  componentWillMount() {
    const self = this
    this.getArticles().then(articles => {
      const parsedArticles = articles.query.random.map(article => {
        return article.title.replace(/ /g, "_")
      })
      
      self.setState({articles: parsedArticles})
      self.setState({currentArticle: this.state.articles[0]})
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">  		
            <Frame src={"http://wikipedia.org/wiki/" + this.state.currentArticle} />
            <div className="col-xs-3 visible-sm visible-md visible-lg sidebar">
              <div className="logo"><h1>Wiki<br/><small>Roulette</small></h1></div>
              <Buttons nextArticle={this.nextArticle.bind(this)} state={this.state}/>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
