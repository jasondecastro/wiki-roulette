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

    this.checkStatus()
  }

  nextArticle() {
    this.setState({
      currentArticle: this.state.articles[this.state.articles.indexOf(this.state.currentArticle) + 1]
    })

    window.history.pushState(this.state.articles[this.state.articles.indexOf(this.state.currentArticle) + 1].replace(/ /g, "_"), 'WikiRoulette &mdash; Random Wikipedia Articles', '/?p=' + this.state.articles[this.state.articles.indexOf(this.state.currentArticle) + 1])
  }

  previousArticle() {
    this.setState({
      currentArticle: this.state.articles[this.state.articles.indexOf(this.state.currentArticle) - 1]
    })

    window.history.pushState(this.state.articles[this.state.articles.indexOf(this.state.currentArticle) - 1].replace(/ /g, "_"), 'WikiRoulette &mdash; Random Wikipedia Articles', '/?p=' + this.state.articles[this.state.articles.indexOf(this.state.currentArticle) - 1])
  }

  checkStatus() {
    console.log("Checking status.")
    if (!this.state.currentArticle.includes(window.location.href)) {
      const matches = window.location.href.match(/=(.+)/)
      if (matches) {
        this.setState({currentArticle: matches[1]})
      }
    }
  }

  navigate(e) {
    if (e.keyCode === 37) {
      this.previousArticle()
    } else if (e.keyCode === 39) {
      this.nextArticle()
    }
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

      self.setState({
        articles: parsedArticles,
        currentArticle: parsedArticles[0]
      })

      this.checkStatus()
    })
  }

  componentDidMount() {
    document.getElementById('app').focus()
  }

  render() {
    console.log("Rendering article.")
  
    return (
      <div className="App noSelect" id="app" tabIndex="0" onKeyDown={this.navigate.bind(this)}>
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
