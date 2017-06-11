import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Footer extends Component {
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

  generateFooterMenu() {
    return this.state.pages.map(page => {
      return <li key={page.id}><Link to={`/page/${page.id}`}>{page.title}</Link></li>;
      }
    )
  }

  render() {
    return (
      <footer className="row">
        <div className="small-8 small-offset-2 columns">
          <ul className="no-bullet">
            {this.generateFooterMenu()}
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
