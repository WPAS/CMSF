import React, { Component } from 'react';
import axios from 'axios';

import Nav from 'Nav';
import ArticlesList from 'ArticlesList';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8000/articles.json').then(res => {
        this.setState({
          articles: res.data
        });
      }).catch(error => {
        console.log(error)
      });
  }

  render() {
    return(
      <main>
        <Nav />
        <ArticlesList articles={this.state.articles} />
      </main>
    )
  }
}

export default Main;
