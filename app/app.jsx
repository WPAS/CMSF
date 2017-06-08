import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Main from 'Main';
import Article from 'Article';

const Test = () => <p>wreszcie kurna coś tu działa!!!</p>

ReactDOM.render(
  <HashRouter>
    <div>
        <Route exact path="/" component={Main} />
        <Route path="/test" component={Test} />
        <Route path="/articles/:id" component={Article} />
    </div>
  </HashRouter>
  ,document.getElementById("app"));
