import React from 'react';
import { Link } from 'react-router-dom';

const ListElement = props => {
  const { id, title, text, author, date } = props;

  const shortText = text.substring(0,200) + "...";

  return (
    <li className="row">
      <div className="small-8 small-offset-2 columns">
        <h4>{title}</h4>
        <p>{shortText}</p>
        <p>{author}, {date.substring(0,10)}</p>
        <Link to={`/articles/${id}`}>
          Read more &gt;&gt;
        </Link>
        <hr />
      </div>
    </li>
  );
}

export default ListElement;
