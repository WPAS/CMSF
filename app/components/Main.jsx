import React, { Component } from 'react';
import axios from 'axios';

import ArticlesList from 'ArticlesList';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8000/articles').then(res => {
        this.setState({
          articles: res.data
        });
      }).catch(error => {
        console.log(error)
      });
  }

  render() {
    return(
      <section>
        <ArticlesList articles={this.state.articles} />
      </section>
    )
  }
}

export default Main;
