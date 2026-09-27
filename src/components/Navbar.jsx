import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#050505]/90 backdrop-blur-md border-b border-neutral-900 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tight text-white">
          rafli<span className="text-neutral-600">.portofolio</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector(link.href);
                if (target) {
                  const navbarHeight = 80;
                  const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
                  window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              className="text-neutral-400 hover:text-white transition-colors text-sm font-medium tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-neutral-400 hover:text-white p-2 -mr-2 transition-colors focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#050505] border-b border-neutral-900"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);

                    setTimeout(() => {
                      const target = document.querySelector(link.href);
                      if (target) {
                        const navbarHeight = 80;
                        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
                        window.scrollTo({
                          top: targetPosition,
                          behavior: 'smooth'
                        });
                      }
                    }, 150);
                  }}
                  className="text-neutral-400 hover:text-white transition-colors text-base font-medium border-b border-neutral-900 pb-4 last:border-0"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
