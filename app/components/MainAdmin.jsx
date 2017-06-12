import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
      <div>
        <section className="row">
          <div className="small-8 small-offset-2 columns">
          <h3>Admin area</h3>
          <Link to="/newArticle" className="button success">ADD NEW ARTICLE</Link>
          <Link to="/editPages" className="button">EDIT PAGES</Link>
          <hr />
          </div>
        </section>
        <section>
          <ArticlesListAdmin articles={this.state.articles} />
        </section>
      </div>
    )
  }
}

export default MainAdmin;
