import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Nav from 'Nav';
import Footer from 'Footer';
import NewestArticles from 'NewestArticles';

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
      <div >
        <Nav />
        <article className="row">
          <div className="small-8 small-offset-2 columns">
            <h3 >{title}</h3>
            <p>{text}</p>
            <p className="text-right">{author}, {date}</p>
          </div>
        </article>
        <NewestArticles />
        <Footer />
      </div>
    )
  }
}

export default Article;
