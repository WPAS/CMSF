import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import PagesListAdmin from 'PagesListAdmin';

class PageAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pages: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8000/pages').then(res => {
        this.setState({
          pages: res.data
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
          <Link to="/newPage" className="button expanded">ADD NEW PAGE</Link>
          <hr />
          </div>
        </section>
        <section>
          <PagesListAdmin pages={this.state.pages} />
        </section>
      </div>
    )
  }
}

export default PageAdmin;
