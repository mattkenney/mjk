import * as React from 'react';

import Navbar from 'react-bulma-components/lib/components/navbar';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';

import Blog from './views/Blog';
import BlogEntry from './views/BlogEntry';
import Home from './views/Home';
import Music from './views/Music';

export default function App() {
  return (
    <Router>
      <div>
        <Navbar>
          <Navbar.Brand>
            <Navbar.Item><NavLink to="/">Home</NavLink></Navbar.Item>
            <Navbar.Item><NavLink to="/blog">Blog</NavLink></Navbar.Item>
          </Navbar.Brand>
        </Navbar>
        <Switch>
          <Route path="/blog" exact={true} component={Blog}/>
          <Route path="/blog/:id" component={BlogEntry}/>
          <Route path="/music/:id" component={Music}/>
          <Route component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}
