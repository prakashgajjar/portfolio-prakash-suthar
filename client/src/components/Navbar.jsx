import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/#home' },
  { name: 'Work', path: '/#work' },
  { name: 'About', path: '/#about' },
  { name: 'Contact', path: '/#contact' },
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
    <nav
      className={`fixed w-full top-0 z-[100] transition-transform duration-500 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="backdrop-blur-lg bg-black/30 border-b border-white/10 px-6 py-4 flex justify-between items-center shadow-md">

        {/* Logo */}
        <h1 className="text-purple-400 text-2xl font-bold tracking-wide cursor-pointer transition-transform duration-300 hover:scale-105">
          PRAKASH.dev
        </h1>

        {/* Hamburger */}
        <button
          className="text-purple-400 text-3xl sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-8 items-center">
          {navItems.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                `text-lg font-mono tracking-wide transition duration-300 px-2 py-1 border-b-2
                ${isActive ? 'text-purple-400 border-purple-400' : 'text-white border-transparent hover:border-purple-400 hover:text-purple-300'}`
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
          className={`
      sm:hidden 
      bg-black/70 backdrop-blur-lg px-6 py-4 flex flex-col gap-4
      transform transition-all duration-500 ease-out
      animate-slideDown
    `}
        >
          {navItems.map(({ name, path }, index) => (
            <NavLink
              key={name}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-lg font-mono tracking-wide transition duration-300
      ${isActive ? 'text-purple-400' : 'text-white hover:text-purple-400'}
      fade-slide-in`
              }
              style={{ animationDelay: `${index * 100}ms` }} // 0ms, 100ms, 200ms, ...
            >
              {name}
            </NavLink>
          ))}

        </div>
      )}
    </nav>
  );
};

export default Navbar;
