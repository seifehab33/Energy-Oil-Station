
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Transition } from 'react-transition-group';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Service_eco from './Components/Services-ECO/Service-eco';
import Sustainability from './Components/Sustainability/Sustainability';
import Product from './Components/Products/product';

const Header = lazy(() => import('./Components/Header/Header'));

function Loader() {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="ball1"></div>
        <div className="ball2"></div>
        <div className="ball3"></div>
        <div className="ball4"></div>
      </div>
    </div>
  );
}

function TitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    let title = '';

    // Set the title based on the current pathname
    if (pathname === '/') {
      title = 'Home | CONDA';
    } else if (pathname === '/about') {
      title = 'About | CONDA';
    }else if (pathname === '/contact')
    {
      title = 'Contact | CONDA'
    }else if (pathname === '/services')
    {
      title = 'Service | CONDA'
    }else if (pathname === '/sustainability')
    {
      title = 'Sustainability | CONDA'
    }else if (pathname === '/products')
    {
      title = 'Products | CONDA'
    }

    document.title = title; // Update the document's title
  }, [location]);

  return null; // This component doesn't render anything
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a loading process
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Router>
      <Navbar />
      <TitleUpdater />
      {loading ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <Transition in={true} appear={true}>
            {(state) => (
              <div className={`content-container ${state === 'entered' ? 'show' : ''}`}>
                <Routes>
                  <Route exact path="/" element={<Header />} />
                  <Route exact path="/about" element={<About place="About" />} />
                  <Route exact path="/contact" element={<Contact place="Contact" />} />
                  <Route exact path="/services" element={<Service_eco/>} />
                  <Route exact path="/sustainability" element={<Sustainability/>} />
                  <Route exact path="/products" element={<Product/>} />
                </Routes>
              </div>
            )}
          </Transition>
        </Suspense>
      )}
      <Footer />
    </Router>
  );
}

export default App;
