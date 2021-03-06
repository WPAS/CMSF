import React from 'react';

import ListElementAdmin from "ListElementAdmin";

const ArticlesListAdmin = function(props) {
  const { articles } = props;

  const List = articles.map(article => {
    return <ListElementAdmin key={article.id} {...article} />
    }
  )

  return (
    <ul className="no-bullet">{ List }</ul>
  )
};

export default ArticlesListAdmin;
