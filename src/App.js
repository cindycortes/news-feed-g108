import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';
import ArticleList from './components/ArticleList';
// import AddArticle from './components/AddArticle';
import Footer from './components/Footer';
import Axios from 'axios';
class App extends Component {

  state = {
    articles: []
  }

  // componentDidMount = async () => {
  //   try {
  //     const res = await fetch(`http://localhost:3001/articles`);
  //     const json = await res.json();
  //     this.setState({
  //       articles: json.map(article => {
  //         return {
  //           ...article
  //         }
  //       })
  //     })
  //   } catch (e) {
  //     alert(e);
  //   }
  // }

  componentDidMount() {
    Axios.get(`http://localhost:3001/articles`)
      .then(response => this.setState({ articles: response.data }))
  }

  addArticle = newArticle => {
    const { title, img } = newArticle;
    fetch(`http://localhost:3001/articles`, {
      method: "post",
      body: JSON.stringify({ title, img }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(json => {
        this.setState(prevState => {
          return {
            article: [
              ...prevState.article,
              {
                title,
                img
              }
            ]
          }
        })
      })
  }





  render() {

    return (
      <div className="container">
        <Header />

        <ArticleList articles={this.state.articles} />

        <Footer />

      </div>
    )
  }
}

export default App;
