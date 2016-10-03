export function fetchArticles() {
  const url = 'https://en.wikipedia.org/w/api.php?action=query&list=random&rnnamespace=0&rnlimit=100&format=json&origin=*'
    
  const articles = fetch(url).then(response => {
    return response.json()
  }).then(articles => {
    return articles
  })

  return {
    type: 'FETCH_ARTICLES',
    payload: articles
  }
}