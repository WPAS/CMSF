import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ListElementPage = function(props) {

  const { id, title, text, date } = props;

  const shortText = text.substring(0,200) + "...";

  return (
    <li className="row">
      <div className="small-8 small-offset-2 columns">
        <h3>{title}</h3>
        <p>{shortText}</p>
        <p>{date.substring(0,10)}</p>
        <Link to={`/editPage/${id}`} className="button">
          Edit/Remove page
        </Link>
        <hr />
      </div>
    </li>
  );
}

export default ListElementPage;
