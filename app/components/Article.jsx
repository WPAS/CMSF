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

    const URL = `http://localhost:8000/articles/${id}`

    axios.get(URL).then(res => {
        this.setState({
          article: res.data
        });
      }).catch(error => {
        console.log(error)
      });
  }

  render() {
    const { title, text, author, date } = this.state.article;

    return(
      <main>
        <Nav />
        <article>
          <h3>{title}</h3>
          <p>{text}</p>
          <span>{author}, {date}</span>
        </article>
      </main>
    )
  }
}

export default Article;
