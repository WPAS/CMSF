import React, { Component, PropTypes } from 'react';
import axios from 'axios';

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
        const { title, text, author } = this.state.article;
        this.refs.title.value = title;
        this.refs.text.value = text;
        this.refs.author.value = author;
        this.refs.title.focus();
      }).catch(error => {
        console.log(error)
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

  handleDelete() {
    const { id } = this.state.article;
    axios.delete(`http://localhost:8000/articles/${id}`)
    .then(res => {
      console.log(res);
      this.props.history.push("/admin");
     })
    .catch(error => { console.log(error) });
  }

  render() {
    const { title, text, author, date } = this.state.article;

    return(
      <div>
        <section className="row">
          <div className="small-8 small-offset-2 columns">
            <h3>Admin area</h3>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <input type="text" ref="title"></input><br/>
              <textarea rows="15" cols="75" ref="text" /><br/>
              <input type="text" ref="author"></input>
              <button className="button">Save edits</button>
            </form>
          </div>
        </section>
        <section className="row">
          <div className="small-8 small-offset-2 columns">
            <hr />
            <h3>Beware! Removed article cannot be undeleted!</h3>
            <button className="button alert" onClick={this.handleDelete.bind(this)}>Delete this article</button>
          </div>
        </section>
      </div>
    )
  }
}

export default EditArticle;
