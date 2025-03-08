import { Navbar } from 'react-bulma-components';
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';

import { Blog } from './views/Blog';
import { BlogEntry } from './views/BlogEntry';
import { Home } from './views/Home';
import { Links } from './views/Links';
import { Music } from './views/Music';

export default function App() {
  return (
    <Router>
      <>
        <Navbar>
          <Navbar.Brand>
            <Navbar.Item renderAs="div"><NavLink to="/">Home</NavLink></Navbar.Item>
            <Navbar.Item renderAs="div"><NavLink to="/blog">Blog</NavLink></Navbar.Item>
          </Navbar.Brand>
        </Navbar>
        <Routes>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/blog/:id" element={<BlogEntry/>}/>
          <Route path="/links" element={<Links/>}/>
          <Route path="/music/:id" element={<Music/>}/>
          <Route path="*" element={<Home/>}/>
        </Routes>
      </>
    </Router>
  );
}
