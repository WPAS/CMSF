import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ListElementAdmin = function(props) {

  const { id, title, text, author, date, onDelete } = props;

  const shortText = text.substring(0,121) + "...";

  const onButtonClick = () => {
    axios.delete(`http://localhost:8000/articles/${id}`)
    .then(res => {
      console.log(res);
     })
    .catch(error => { console.log(error) });
  }

  return (
    <li>
      <h3>{title}</h3>
      <p>{shortText}</p>
      <p>{author}, {date.substring(0,10)}</p>
      <Link to={`/edit/${id}`}>
        Edit
      </Link>
      <button onClick={onButtonClick}>Delete</button>
    </li>
  );
}

export default ListElementAdmin;
