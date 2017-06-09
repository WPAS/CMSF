import React from 'react';
import { Link } from 'react-router-dom';

const ListElement = props => {
  const { id, title, text, author, date } = props;

  const shortText = text.substring(0,121) + "...";

  return (
    <li>
      <h3>{title}</h3>
      <p>{shortText}</p>
      <p>{author}, {date.substring(0,10)}</p>
      <Link to={`/articles/${id}`}>
        Read more &gt;&gt;
      </Link>
    </li>
  );
}

export default ListElement;
