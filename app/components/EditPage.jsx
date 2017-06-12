import React, { Component, PropTypes } from 'react';
import axios from 'axios';

class EditPage extends Component {
  constructor(props) {
    super(props);

    this.state = { page: "" };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    const URL = `http://localhost:8000/pages/${id}`

    axios.get(URL).then(res => {
        this.setState({
          page: res.data
        });
        this.refs.title.focus();
      }).catch(error => {
        console.log(error)
      });
  }

  handleFocus(e) {
    const { title, text } = this.state.page;
    this.refs.title.value = title;
    this.refs.text.value = text;
  }

  handleBlur(e) {
    const title = this.refs.title.value;
    const text = this.refs.text.value;
    const { id, date } = this.state.page;
    this.setState({
      page: { id, title, text, date }
    });
  }

  handleSubmit(e) {
    e.preventDefault;
    const title = this.refs.title.value;
    const text = this.refs.text.value;
    const id = this.state.page.id;
    console.log({ id, title, text});

    const URL = `http://localhost:8000/pages/${id}`

    axios.put(URL, { title, text })
    .then(res => {
      this.props.history.push("/editPages");
      console.log(res) })
    .catch(error => { console.log(error) });
  }

  handleDelete() {
    const { id } = this.state.page;
    axios.delete(`http://localhost:8000/pages/${id}`)
    .then(res => {
      console.log(res);
      this.props.history.push("/editPages");
     })
    .catch(error => { console.log(error) });
  }


  render() {
    const { title, text, date } = this.state.page;

    return(
      <div>
        <section className="row">
          <div className="small-8 small-offset-2 columns">
            <h3>Admin area</h3>
            <form onFocus={this.handleFocus.bind(this)}
                  onSubmit={this.handleSubmit.bind(this)}
                  onBlur={this.handleBlur.bind(this)}
                  >
              <input type="text" ref="title"></input><br/>
              <textarea rows="15" cols="75" ref="text" /><br/>
              <button className="button">Save edits</button>
            </form>
          </div>
        </section>
        <section className="row">
          <div className="small-8 small-offset-2 columns">
            <hr />
            <h3>Beware! Removed page cannot be undeleted!</h3>
            <button className="button alert" onClick={this.handleDelete.bind(this)}>Delete this page</button>
          </div>
        </section>
      </div>
    )
  }
}

export default EditPage;
