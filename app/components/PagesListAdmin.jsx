import React from 'react';

import ListElementPage from "ListElementPage";

const PagesListAdmin = function(props) {
  const { pages } = props;

  const List = pages.map(page => {
    return <ListElementPage key={page.id} {...page} />
    }
  )

  return (
    <ul className="no-bullet">{ List }</ul>
  )
};

export default PagesListAdmin;
