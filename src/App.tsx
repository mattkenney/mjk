import { Navbar } from 'react-bulma-components';
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';

import { Blog } from './views/Blog';
import { BlogEntry } from './views/BlogEntry';
import { Home } from './views/Home';
import { Music } from './views/Music';

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
        <Routes>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/blog/:id" element={<BlogEntry/>}/>
          <Route path="/music/:id" element={<Music/>}/>
          <Route path="*" element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}
