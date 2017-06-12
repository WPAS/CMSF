import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import NewestArticles from 'NewestArticles';

class Page extends Component {
  constructor(props) {
    super(props);

    this.state = { page: { id: "", title: "", text: "Loading...", date: ""} };
  }

  getPage() {
    const { id } = this.props.match.params;

    const URL = `http://localhost:8000/pages/${id}`

    axios.get(URL).then(res => {
        this.setState({
          page: res.data
        });
      }).catch(error => {
        console.log(error)
      });
  }

  componentDidMount() {
    this.getPage();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.getPage();
    }
  }

  render() {
    const { title, text, date } = this.state.page;
    const shortDate = date.substring(4, 15);

    return(
      <div >
        <section className="row">
          <div className="small-8 small-offset-2 columns">
            <h3 >{title}</h3>
            <p>{text}</p>
            <p className="text-right">{shortDate}</p>
          </div>
        </section>
        <NewestArticles />
      </div>
    )
  }
}

export default Page;
