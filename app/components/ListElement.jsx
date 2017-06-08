import React from 'react';

const ListElement = props => {
  const { title, text, author, date } = props

  const shortText = text.substring(0,121) + "...";

  return (
    <li>
      <h3>{title}</h3>
      <p>{shortText}</p>
      <span>{author}, {date}</span>
    </li>
  );
}


export default ListElement;
