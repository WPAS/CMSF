import React, { Component } from 'react';
import axios from 'axios';

import Nav from 'Nav';

class NewArticle extends Component {

  handleSubmit(e) {
    e.preventDefault();
    const title = this.refs.title.value;
    const text = this.refs.text.value;
    const author = this.refs.author.value;
    const date = this.refs.date.value;
    console.log({ title, text, author, date });

    if(title.length > 0 && text.length > 0 && author.length > 0) {
      axios.post('http://localhost:8000/articles', { title, text, author, date })
      .then(res => { console.log(res) })
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
        <h3>Admin area</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="title" placeholder="Add a title"></input><br/>
          <textarea rows="15" cols="75" ref="text" placeholder="Write new article" />
          <input type="text" ref="author" placeholder="Add author's name"></input>
          <input type="hidden" ref="date" value={now}></input>
          <button>Add Article</button>
        </form>
      </main>
    );
  }

//ref={input => {this.name = input;}}

}

export default NewArticle;
