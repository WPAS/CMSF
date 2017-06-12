import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class NewArticle extends Component {

  handleSubmit(e) {
    e.preventDefault();
    const title = this.refs.title.value;
    const text = this.refs.text.value;
    const author = this.refs.author.value;
    const date = this.refs.date.value;
    //console.log({ title, text, author, date });

    if(title.length > 0 && text.length > 0 && author.length > 0) {
      axios.post('http://localhost:8000/articles', { title, text, author, date })
      .then(res => {
        this.props.history.push("/admin");
        console.log(res) })
      .catch(error => { console.log(error) });
    } else {
      this.refs.title.focus();
    }
  }

  render() {
    const now = new Date();

    return (
      <div>
        <section className="row">
          <div className="small-8 columns small-offset-2 text-left">
            <h3>Admin area</h3>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <input type="text" ref="title" placeholder="Add a title"></input><br/>
              <textarea rows="15" cols="75" ref="text" placeholder="Write new article" /><br/>
              <input type="text" ref="author" placeholder="Add author's name"></input>
              <input type="hidden" ref="date" value={now}></input>
              <button className="button success">Add Article</button>
            </form>
          </div>
        </section>
      </div>
    );
  }
//ref={input => {this.name = input;}}
}

export default NewArticle;
