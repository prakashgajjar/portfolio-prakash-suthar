import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Icon library (optional)

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Work', path: '/work' },
  { name: 'Lab', path: '/lab' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`w-screen fixed top-0 z-50 transition-transform duration-500 ${showNavbar ? 'translate-y-0' : '-translate-y-full'
        } px-4 py-4`}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-white text-2xl sm:text-3xl font-bold cursor-pointer transform transition duration-300 hover:scale-110">
          PRAKASH
        </h1>

        {/* Hamburger Button - visible only on mobile */}
        <button
          className="text-white text-2xl sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex gap-6">
          {navItems.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? 'text-white text-xl opacity-100 transition-all duration-300'
                  : 'text-white text-xl opacity-60 hover:opacity-100 transition-all duration-300'
              }
            >
              {name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`sm:hidden mt-4 flex flex-col gap-4 transition-all duration-500 ease-in-out transform ${menuOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-4 pointer-events-none'
            }`}
        >
          {navItems.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? 'text-white text-xl opacity-100 transition-all duration-300'
                  : 'text-white text-xl opacity-60 hover:opacity-100 transition-all duration-300'
              }
            >
              {name}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
