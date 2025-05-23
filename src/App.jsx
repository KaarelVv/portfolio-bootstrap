import { useLocation, Routes, Route, Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ThemeToggle from './components/ThemeToggle';

// Import your route components
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import FadeOnly from "./components/FadeOnly";
import { useEffect, useRef, useState } from "react";
import { Collapse } from "bootstrap";

export default function App() {
  const location = useLocation();
  const navbarCollapseRef = useRef(null);

  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    const el = document.getElementById('navbar');
    if (el?.classList.contains('show')) {
      setNavbarOpen(true);
    }
  }, []);

  const isActive = (path) =>
    location.pathname === path ? "nav-link active" : "nav-link dark";

  const closeNavbar = () => {
    // Only run on small screens (Bootstrap uses 992px as lg breakpoint)
    if (window.innerWidth >= 992) return;

    const el = navbarCollapseRef.current;
    if (!el) return;

    if (!el._bsCollapse) {
      el._bsCollapse = Collapse.getInstance(el);
    }

    if (el.classList.contains('show')) {
      el._bsCollapse.hide?.(); // optional chaining in case hide isn't async
      setNavbarOpen(false);
    }
  };

  const toggleNavbar = () => {
    const el = navbarCollapseRef.current;
    if (!el) return;

    if (!el._bsCollapse) {
      el._bsCollapse = Collapse.getInstance(el) || new Collapse(el, { toggle: false });
    }

    if (el.classList.contains('show')) {
      el._bsCollapse.hide();
      setNavbarOpen(false);
    } else {
      el._bsCollapse.show();
      setNavbarOpen(true);
    }
  };
  return (
    <div className="min-vh-100 d-flex flex-column ">
      {/* Header / Navbar */}
      <header className="theme-header fixed-top">
        <nav className="navbar navbar-expand-md container-fluid">
          <Link to="/" className="navbar-brand site-logo text-info fw-bold">
            Kaarel Viilvere
          </Link>
          <button
            className={`navbar-toggler ${navbarOpen ? 'active' : ''}`}
            type="button"
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="mainNavbar" ref={navbarCollapseRef}>
            <div className="dropdown-menu-custom">
              <ul className="navbar-nav mb-2 mb-lg-0 ">
                <li className="nav-item"><Link to="/" className={isActive("/")} onClick={closeNavbar}><i className="bi bi-house-door me-1"></i> Home</Link></li>
                <li className="nav-item"><Link to="/projects" className={isActive("/projects")} ><i className="bi bi-kanban me-1"></i> Projects</Link></li>
                <li className="nav-item"><Link to="/about" className={isActive("/about")} onClick={closeNavbar}><i className="bi bi-person-badge me-1"></i> About</Link></li>
                <li className="nav-item"><Link to="/contact" className={isActive("/contact")} onClick={closeNavbar}><i className="bi bi-envelope me-1"></i> Contact</Link></li>
                <li className="nav-item"><Link to="/resume" className={isActive("/resume")} onClick={closeNavbar}><i className="bi bi-file-earmark-person me-1"></i> Resume</Link></li>
                <li className="nav-item d-flex align-items-center ms-3" onClick={closeNavbar}><ThemeToggle /></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* Animated Content */}
      <main className="flex-grow-1 d-flex justify-content-center align-items-center no-mobile-padding">
        <div className="w-100" style={{ maxWidth: "1000px", minHeight: "calc(100vh - 100px)", marginTop: "100px", transition: "all 0.3s ease" }}>
          <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<FadeOnly><Home /></FadeOnly>} />
              <Route path="/projects" element={<FadeOnly><Projects /></FadeOnly>} />
              <Route path="/about" element={<FadeOnly><About /></FadeOnly>} />
              <Route path="/contact" element={<FadeOnly><Contact /></FadeOnly>} />
              <Route path="/resume" element={<FadeOnly><Resume /></FadeOnly>} />
            </Routes>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
