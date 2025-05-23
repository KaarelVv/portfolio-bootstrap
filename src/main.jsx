import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './styles/main.css';

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import Resume from './pages/Resume.jsx';


document.addEventListener('DOMContentLoaded', function () {
  // Now document.body is available
  console.log(document.body);
});
document.addEventListener("DOMContentLoaded", function () {
  // Now it's safe to use document.body
  const navToggler = document.querySelector('.navbar-toggler');
  if (navToggler) {
    navToggler.addEventListener('click', () => {
      document.body.classList.toggle('nav-open');
    });
  }
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/portfolio">
    <Routes>
      <Route path="*" element={<App />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="resume" element={<Resume />} />
      </Route>
    </Routes> 
  </BrowserRouter>
);
console.log('Is body ready?', document.body);

