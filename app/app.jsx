import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Main from 'Main';

const Test = () => <p>wreszcie kurna coś tu działa!!!</p>

ReactDOM.render(
  <HashRouter>
    <div>
        <Route exact path="/" component={Main} />
        <Route path="/test" component={Test} />
    </div>
  </HashRouter>
  ,document.getElementById("app"));
