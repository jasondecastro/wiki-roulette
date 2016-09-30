import React, { Component } from 'react';
import '../static/App.css';
import '../static/bootstrap.min.css';
import Frame from './Frame';
import Footer from './Footer';
import Buttons from './Buttons';


class App extends Component {
  constructor() {
    super()
    this.articleLinkParser = this.articleLinkParser.bind(this)
    this.state = {
      articles: []
    }
  }

  getArticles() {
    const self = this
    const url = 'https://en.wikipedia.org/w/api.php?action=query&list=random&rnnamespace=0&rnlimit=10&format=json&origin=*'
    
    return fetch(url).then(response => {
      return response.json()
    }).then(articles => {
      return articles
      // self.setState({articles: articles.query.random})
    })
  }

  componentWillMount() {
    const that = this
    const articles =  this.getArticles().then(articles => {
      that.setState({articles: articles.query.random})
    })
  }

  articleLinkParser() {
    if (this.state.articles.length == 0) {
      return 'nothing'
    } else {
      return "http://wikipedia.org/wiki/" + this.state.articles[0].title.replace(/ /g, "_")
    }
    
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">  		
            <Frame src={this.articleLinkParser()} />
            <div className="col-xs-3 visible-sm visible-md visible-lg sidebar">
              <div className="logo"><h1>Wiki<br/><small>Roulette</small></h1></div>
              <Buttons />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
