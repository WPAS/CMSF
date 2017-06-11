import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Nav from 'Nav';
import ArticlesListAdmin from 'ArticlesListAdmin';

class MainAdmin extends Component {
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
      <main>
        <Nav />
        <div className="row">
          <div className="small-8 small-offset-2 columns">
          <h3>Admin area</h3>
          <Link to="/newArticle" className="button expanded success">ADD NEW ARTICLE</Link>
          <hr />
          </div>
        </div>
        <ArticlesListAdmin articles={this.state.articles} />
      </main>
    )
  }
}

export default MainAdmin;
