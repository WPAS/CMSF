import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Nav from 'Nav';

class NewPage extends Component {

  handleSubmit(e) {
    e.preventDefault();
    const title = this.refs.title.value;
    const text = this.refs.text.value;
    const date = this.refs.date.value;
    console.log({ title, text, date });

    if(title.length > 0 && text.length > 0) {
      axios.post('http://localhost:8000/pages', { title, text, date })
      .then(res => {
        this.props.history.push("/editPages");
        console.log(res) })
      .catch(error => { console.log(error) });
    } else {
      this.refs.title.focus();
    }
  }

  render() {
    const now = new Date();

    return (
      <main>
        <Nav />
        <div className="row">
          <div className="small-8 columns small-offset-2 text-left">
            <h3>Admin area</h3>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <input type="text" ref="title" placeholder="Add a title"></input><br/>
              <textarea rows="15" cols="75" ref="text" placeholder="Write new page" /><br/>
              <input type="hidden" ref="date" value={now}></input>
              <button className="button success">Add page</button>
            </form>
          </div>
        </div>
      </main>
    );
  }
//ref={input => {this.name = input;}}
}

export default NewPage;
