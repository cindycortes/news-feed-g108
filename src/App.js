import React, { Component } from 'react';
import Header from './components/Header';
import ArticleList from './components/ArticleList';
import Footer from './components/Footer';
class App extends Component {

  state = {
    articles: [],
    // url: "https://localhost:3001/articles"

  }

  async componentDidMount() {
    const response = await fetch(`http://localhost:3001/articles`)
    const articles = await response.json();
    this.setState({ articles });
  } catch(error) {
    console.log(error)
  }


  render() {
    console.log(this.state.articles);

    return (
      <>
        <Header />

        <ArticleList />

        <Footer />

      </>
    );
  }
}

export default App;
