import React, { Component } from 'react';
import axios from 'axios';

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
        <h3>Admin area</h3>
        <ArticlesListAdmin articles={this.state.articles} />
      </main>
    )
  }
}

export default MainAdmin;
