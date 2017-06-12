import React, { Component } from 'react';
import axios from 'axios';

import ArticlesList from 'ArticlesList';

class NewestArticles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8000/newestArticles').then(res => {
        this.setState({
          articles: res.data
        });
      }).catch(error => {
        console.log(error)
      });
  }

  render() {
    return(
      <section className="row">
        <hr />
        <h3 className="small-8 small-offset-2 columns text-center">Read our newest articles</h3>
        <ArticlesList articles={this.state.articles} />
      </section>
    )
  }
}

export default NewestArticles;
