import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Nav from 'Nav';

class Article extends Component {
  constructor(props) {
    super(props);

    this.state = { article: "" };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    const URL = `http://localhost:8000/articles/${id}.json`

    axios.get(URL).then(res => {
        this.setState({
          article: res.data
        });
      }).catch(error => {
        console.log(error)
      });
  }

  render() {
    return(
      <main>
        <Nav />
        <article>
          <h3>{this.state.article.title}</h3>
          <p>{this.state.article.text}</p>
          <span>{this.state.article.author}, {this.state.article.date}</span>
        </article>
      </main>
    )
  }
}

export default Article;
