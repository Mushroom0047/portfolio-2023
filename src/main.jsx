import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Pages/Home';
import { PrivacyPolicyUpperLower } from './Pages/PrivacyPolicyUpperLower';
import { NoPage } from './Pages/NoPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/privacy-policy-upper-lower" component={PrivacyPolicyUpperLower} />
        <Route path="*" component={NoPage} />
      </Switch>
    </Router>
  </React.StrictMode>
);
