import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

import Main from 'Main';
import Article from 'Article';
import NewArticle from 'NewArticle';
import MainAdmin from 'MainAdmin';
import EditArticle from 'EditArticle';
import Page from 'Page';

ReactDOM.render(
  <HashRouter>
    <div>
        <Route exact path="/" component={Main} />
        <Route path="/articles/:id" component={Article} />
        <Route path="/newArticle" component={NewArticle} />
        <Route path="/admin" component={MainAdmin} />
        <Route path="/edit/:id" component={EditArticle} />
        <Route path="/page/:id" component={Page} />
    </div>
  </HashRouter>
  ,document.getElementById("app"));
