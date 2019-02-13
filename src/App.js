import React, { Component } from 'react';
import Axios from 'axios';

class App extends Component {

  state = {
    articles: [],
    // url: "https://localhost:3001/articles"

  }
  
  async componentDidMount() {
    const response = await fetch(`http://localhost:3001/articles`)
    const articles = await response.json();
    this.setState({ articles });
  }catch (error) {
    console.log(error)
  }
  

  render() {
    console.log(this.state.articles);

    return (
      <div>Article App</div>
    );  
  }
}

export default App;
