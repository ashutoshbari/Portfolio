import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Cpu } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { threshold: 0.4 }
    );
    document.querySelectorAll('section[id]').forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNav = (href) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled
            ? (darkMode ? 'rgba(10,10,15,0.85)' : 'rgba(248,250,252,0.85)')
            : 'transparent',
          borderBottom: scrolled ? '1px solid var(--border)' : 'none',
          transition: 'background 0.35s ease, border 0.35s ease',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNav('#home'); }}
              style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}
              whileHover={{ scale: 1.03 }}
            >
              <div style={{
                width: 36, height: 36,
                background: 'linear-gradient(135deg, #6366f1, #22d3ee)',
                borderRadius: 10,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Cpu size={18} color="white" />
              </div>
              <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 18, color: 'var(--text-primary)' }}>
                Ashutosh<span style={{ color: '#6366f1' }}>.</span>
              </span>
            </motion.a>

            {/* Desktop Links */}
            <div style={{ display: 'flex', gap: 4, alignItems: 'center' }} className="hidden md:flex">
              {navLinks.map(link => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '8px 16px',
                    borderRadius: 8,
                    fontSize: 14,
                    fontWeight: 500,
                    color: active === link.href.slice(1) ? '#6366f1' : 'var(--text-secondary)',
                    background: active === link.href.slice(1) ? 'rgba(99,102,241,0.08)' : 'transparent',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setDarkMode(!darkMode)}
                style={{
                  width: 38, height: 38,
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 10,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', color: 'var(--text-secondary)',
                }}
              >
                {darkMode ? <Sun size={16} /> : <Moon size={16} />}
              </motion.button>

              <a href="/resume.pdf" download style={{ textDecoration: 'none' }} className="hidden md:block">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-primary"
                  style={{ padding: '8px 20px', fontSize: 14 }}
                >
                  Resume ↓
                </motion.button>
              </a>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                style={{
                  display: 'flex', background: 'none', border: 'none',
                  cursor: 'pointer', color: 'var(--text-primary)',
                }}
                className="md:hidden"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="mobile-menu"
            style={{
              position: 'fixed', top: 68, left: 0, right: 0, z: 49,
              background: darkMode ? 'rgba(10,10,15,0.95)' : 'rgba(248,250,252,0.95)',
              borderBottom: '1px solid var(--border)',
              padding: '20px 24px',
              zIndex: 49,
            }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <button
                  onClick={() => handleNav(link.href)}
                  style={{
                    display: 'block', width: '100%', textAlign: 'left',
                    background: 'none', border: 'none', cursor: 'pointer',
                    padding: '14px 0', fontSize: 16, fontWeight: 500,
                    color: active === link.href.slice(1) ? '#6366f1' : 'var(--text-primary)',
                    borderBottom: '1px solid var(--border)',
                  }}
                >
                  {link.label}
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
