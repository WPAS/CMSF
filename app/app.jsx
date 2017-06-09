import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Main from 'Main';
import Article from 'Article';
import NewArticle from 'NewArticle';

const Test = () => <p>wreszcie kurna coś tu działa!!!</p>

ReactDOM.render(
  <HashRouter>
    <div>
        <Route exact path="/" component={Main} />
        <Route path="/test" component={Test} />
        <Route path="/articles/:id" component={Article} />
        <Route path="/newArticle" component={NewArticle} />
    </div>
  </HashRouter>
  ,document.getElementById("app"));
