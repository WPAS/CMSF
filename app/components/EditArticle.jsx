import React, { Component, PropTypes } from 'react';
import axios from 'axios';

import Nav from 'Nav';

class EditArticle extends Component {
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
        this.refs.title.focus();
      }).catch(error => {
        console.log(error)
      });
  }

  handleFocus(e) {
    const { title, text, author } = this.state.article;
    this.refs.title.value = title;
    this.refs.text.value = text;
    this.refs.author.value = author;
  }

  handleBlur(e) {
    const title = this.refs.title.value;
    const text = this.refs.text.value;
    const author = this.refs.author.value;
    const { id, date } = this.state.article;
    this.setState({
      article: { id, title, text, author, date }
    });
  }

  handleSubmit(e) {
    e.preventDefault;
    const title = this.refs.title.value;
    const text = this.refs.text.value;
    const author = this.refs.author.value;
    const id = this.state.article.id;
    console.log({ id, title, text, author });

    const URL = `http://localhost:8000/articles/${id}`

    axios.put(URL, { title, text, author })
    .then(res => {
      this.props.history.push("/admin");
      console.log(res) })
    .catch(error => { console.log(error) });
  }

  render() {
    const { title, text, author, date } = this.state.article;

    return(
      <main>
        <Nav />
        <h3>Admin area</h3>
        <form onFocus={this.handleFocus.bind(this)}
              onSubmit={this.handleSubmit.bind(this)}
              onBlur={this.handleBlur.bind(this)}
              >
          <input type="text" ref="title"></input><br/>
          <textarea rows="15" cols="75" ref="text" /><br/>
          <input type="text" ref="author"></input>
          <button>Save edits</button>
        </form>
      </main>
    )
  }
}

export default EditArticle;
