import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Blog from './Blog';
import Contact from './Contact';
import Home from './Home';
import NoPage from './NoPage';



function Layout() {
  return (
    <div>
        <h2>Layout page</h2>
        <Router>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
            
          </nav>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/blog" element={<Blog />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/nopage" element={<NoPage />}/>
            
            
          </Routes>

        </Router>
        
      
    </div>
  )
}

export default Layout

