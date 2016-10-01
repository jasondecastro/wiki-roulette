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
    this.setState({
      currentArticle: this.state.articles[this.state.articles.indexOf(this.state.currentArticle) + 1]
    })
  }

  previousArticle() {
    this.setState({
      currentArticle: this.state.articles[this.state.articles.indexOf(this.state.currentArticle) - 1]
    })
  }

  getArticles() {
    console.log("Initializing...")
    console.log("Fetching 100 articles from Wikipedia...")

    const url = 'https://en.wikipedia.org/w/api.php?action=query&list=random&rnnamespace=0&rnlimit=100&format=json&origin=*'
    
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

      self.state = {
        articles: parsedArticles,
        currentArticle: parsedArticles[0]
      }
    })
  }

  render() {
    console.log("Rendering article.")
    return (
      <div className="App">
        <div className="container">
          <div className="row">  		
            <Frame src={"http://wikipedia.org/wiki/" + this.state.currentArticle} />
            <div className="col-xs-3 visible-sm visible-md visible-lg sidebar">
              <div className="logo"><h1>Wiki<br/><small>Roulette</small></h1></div>
              <Buttons previousArticle={this.previousArticle.bind(this)} nextArticle={this.nextArticle.bind(this)} state={this.state}/>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
