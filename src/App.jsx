import { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import './App.css';

import Home          from './pages/Home';
import About         from './pages/About';
import PEB           from './pages/PEB';
import Tensile       from './pages/Tensile';
import Civil         from './pages/Civil';
import Architectural from './pages/Architectural';
import All           from './pages/All';
import Projects      from './pages/Projects';
import Blog          from './pages/Blog';
import Career        from './pages/Career';
import Contact       from './pages/Contact';

/* Scrolls to top on every route change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'auto' }); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Routes>
        <Route path="/"               element={<Home />} />
        <Route path="/about"          element={<About />} />
        <Route path="/peb"            element={<PEB />} />
        <Route path="/tensile"        element={<Tensile />} />
        <Route path="/civil"          element={<Civil />} />
        <Route path="/architectural"  element={<Architectural />} />
        <Route path="/all"            element={<All />} />
        <Route path="/projects"       element={<Projects />} />
        <Route path="/blog"           element={<Blog />} />
        <Route path="/career"         element={<Career />} />
        <Route path="/contact"        element={<Contact />} />
        <Route path="*"               element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
