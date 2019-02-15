import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';
import ArticleList from './components/ArticleList';
import AddArticle from './components/AddArticle';
import Footer from './components/Footer';
class App extends Component {

  state = {
    articles: [
    ]

  }

  componentDidMount = async () => {
    try {
      const res = await fetch(`http://localhost:3001/articles`);
      const json = await res.json();
      this.setState({
        articles: json.map(article => {
          return {
            ...article
          }
        })
      })
    }catch (e) {
      alert(e);
    }
  }

  // addArticleToList = newArticle => {
  //   this.setState(prevState => {
  //     return {
  //       AddedArticles : [...prevState.articles, newArticle]
  //     }
  //   })
  // }

  render() {
    // console.log(this.state.articles);

    return (
      <div className="container">
        <Header />

        <ArticleList articles={this.state.articles} />

        {/* <AddArticle articles={this.state.articles} addArticleToList={this.addArticleToList} /> */}

        <Footer />

      </div>
    )
  }
}

export default App;
