import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, CalendarClock, Wrench, Mail, Info } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'About', path: '/about', icon: User },
  { name: 'Portfolio', path: '/portfolio', icon: Briefcase },
  { name: 'Timeline', path: '/timeline', icon: CalendarClock },
  { name: 'Services', path: '/services', icon: Wrench },
  { name: 'Info', path: '/info', icon: Info },
  { name: 'Contact', path: '/contact', icon: Mail },
];

const Layout = ({ children }) => {
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [logoColorClass, setLogoColorClass] = useState('filter invert brightness-0'); 
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const mainContentRef = useRef(null);

  useEffect(() => {
    const handleImageBrightnessChange = (event) => {
      const brightness = event.detail.brightness;
      if (brightness > 180) { 
        setLogoColorClass(''); 
      } else {
        setLogoColorClass('filter invert brightness-0'); 
      }
    };

    const checkBackgroundBrightness = (element) => {
      if (!element) return 0; // Default to dark if no element
      const bgColor = window.getComputedStyle(element).backgroundColor;
      if (!bgColor || bgColor === 'transparent' || bgColor === 'rgba(0, 0, 0, 0)') {
        // If transparent, check parent or default to dark
        return checkBackgroundBrightness(element.parentElement) || 0;
      }
      const rgb = bgColor.match(/\d+/g);
      if (!rgb) return 0; // Default to dark
      // Simple brightness formula
      return (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
    };
    
    const handlePageBackgroundCheck = () => {
      if (isHomePage) {
        // Homepage brightness is handled by imageBrightnessChange event from HomePage.jsx
        // Set a default for initial load or if event hasn't fired
        setLogoColorClass('filter invert brightness-0');
        return;
      }

      if (mainContentRef.current) {
        // Check for explicit data attribute first
        const pageDiv = mainContentRef.current.querySelector('div[data-page-bg-light]');
        if (pageDiv) {
          if (pageDiv.dataset.pageBgLight === 'true') {
            setLogoColorClass(''); // Black logo
          } else {
            setLogoColorClass('filter invert brightness-0'); // White logo
          }
          return;
        }

        // Fallback: check computed background of the main content area's direct child
        const mainContentChild = mainContentRef.current.firstChild;
        if (mainContentChild) {
            const brightness = checkBackgroundBrightness(mainContentChild);
            if (brightness > 180) { // Threshold for "light" background
                setLogoColorClass(''); // Black logo
            } else {
                setLogoColorClass('filter invert brightness-0'); // White logo
            }
        } else {
             setLogoColorClass('filter invert brightness-0'); // Default to white if no child
        }
      } else {
        setLogoColorClass('filter invert brightness-0'); // Default to white
      }
    };
    
    window.addEventListener('imageBrightnessChange', handleImageBrightnessChange);
    handlePageBackgroundCheck(); // Initial check

    const observer = new MutationObserver(handlePageBackgroundCheck);
    if (mainContentRef.current) {
        observer.observe(mainContentRef.current, { attributes: true, childList: true, subtree: true, attributeFilter: ['style', 'class', 'data-page-bg-light'] });
    }
    
    // Re-check on route change
    // The dependency array [location.pathname, isHomePage] handles this.

    return () => {
      window.removeEventListener('imageBrightnessChange', handleImageBrightnessChange);
      observer.disconnect();
    };
  }, [location.pathname, isHomePage]);


  const commonLogo = (
    <img 
      src="https://storage.googleapis.com/hostinger-horizons-assets-prod/a0f80629-6237-4f23-87a4-e14c4f785288/47b19eda6a3a0f5ca9ea5f1fa03775de.png" 
      alt="Architect Muhammad Arshad Baig Logo" 
      className={`h-12 sm:h-16 w-auto transition-all duration-500 ${logoColorClass}`} 
    />
  );

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-poppins">
      <header className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-[60] py-6 transition-opacity duration-300 ${isHomePage && isNavHovered ? 'opacity-0' : 'opacity-100'}`}>
        {commonLogo}
      </header>

      <motion.aside 
        className="fixed top-0 left-0 h-full w-16 hover:w-56 bg-background/80 backdrop-blur-sm z-50 flex flex-col items-center border-r border-border transition-all duration-300 ease-in-out group"
        onHoverStart={() => setIsNavHovered(true)}
        onHoverEnd={() => setIsNavHovered(false)}
      >
        <div className="h-28 w-full">
        </div>
        <nav className="flex-grow w-full overflow-hidden">
          <ul className="flex flex-col items-center group-hover:items-start pt-0">
            {navItems.map((item) => (
              <li key={item.name} className="my-2 w-full">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center h-12 px-4 py-2 text-sm transition-all duration-200 ease-in-out overflow-hidden whitespace-nowrap rounded-r-md
                    ${isActive ? 'bg-accent text-accent-foreground font-semibold' : 'text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground'}
                    group-hover:w-full group-hover:pl-6` 
                  }
                >
                  <item.icon className="h-6 w-6 flex-shrink-0" />
                  <motion.span 
                    className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100"
                    initial={{ x: -20 }}
                    animate={{ x: isNavHovered ? 0 : -20 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  >
                    {item.name}
                  </motion.span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </motion.aside>

      <main ref={mainContentRef} className={`flex-grow ${isHomePage ? '' : 'ml-16 pt-28 sm:pt-32'}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: isHomePage ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: isHomePage ? 0 : -20 }}
            transition={{ duration: 0.3 }}
            className={`${isHomePage ? 'h-full' : ''} bg-background`} 
          >
            <Outlet />
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      
      {!isHomePage && (
        <footer className="ml-16 p-4 text-center text-xs text-muted-foreground border-t border-border">
          <p>&copy; {new Date().getFullYear()} Architect Muhammad Arshad Baig. All rights reserved.</p>
          <p>Designed by Hostinger Horizons</p>
        </footer>
      )}
    </div>
  );
};

export default Layout;