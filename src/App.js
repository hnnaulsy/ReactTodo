import React, { Component } from 'react'
import axios from 'axios'

/**
 * 01 axios 
 * 02 请求转发
 * 03 mock 数据
 */

class App extends Component {

  constructor() {
    super()
    this.state = {
      articles: []
    }
  }

  getArticle = async () => {
    let articles = await axios.get('/api/article.json').then(response => response.data)
    this.setState({ articles }, () => {
      console.log(this.state.articles)
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.getArticle}>获取文章列表</button>
        <ul>
          {
            this.state.articles.map(article => (
              <li key={article.id}>{article.title}</li>
            ))
          }
        </ul>
      </div>
    )
  }



}

export default App
