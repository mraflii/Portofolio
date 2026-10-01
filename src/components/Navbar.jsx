import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Education', href: '/education' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 pb-2 pointer-events-none">
      <div className={`pointer-events-auto transition-all duration-500 w-full max-w-5xl ${scrolled ? 'py-3 px-6 bg-[#050505]/60 backdrop-blur-xl border border-neutral-800/60 shadow-[0_4px_30px_rgba(0,0,0,0.5)] rounded-full' : 'py-4 px-6 bg-transparent border border-transparent rounded-full'}`}>
        <div className="flex justify-between items-center w-full">
          <Link to="/" className="text-xl font-extrabold tracking-tighter text-white flex items-center gap-2 group">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 group-hover:scale-150 transition-transform duration-300"></span>
            rafli<span className="text-neutral-500 font-medium tracking-normal">.portofolio</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-1 items-center">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 rounded-full ${isActive ? 'text-white' : 'text-neutral-400 hover:text-white'}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 bg-neutral-800/80 rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {link.name}
                </Link>
              )
            })}
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-neutral-300 hover:text-white transition-colors focus:outline-none bg-neutral-800/50 p-2.5 rounded-full border border-neutral-700/50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-20 left-4 right-4 pointer-events-auto bg-[#0a0a0a]/95 backdrop-blur-2xl border border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-3xl overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-6 py-4 rounded-2xl text-base font-medium transition-all duration-300 ${isActive ? 'bg-neutral-800/80 text-white' : 'text-neutral-400 hover:bg-neutral-900/50 hover:text-white'
                      }`}
                  >
                    {link.name}
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
