import React from 'react';

import ListElement from "ListElement";

const ArticlesList = props => {
  const { articles } = props;
  
  const List = articles.map(article => {
    return <ListElement key={article.id} {...article} />
    }
  )

  return (
    <ul>{ List }</ul>
  )
};

export default ArticlesList;
