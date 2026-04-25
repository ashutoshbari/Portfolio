import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const WORDS = ['AI Engineer', 'CV Specialist', 'MLOps Builder', 'Vision Systems'];

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const word = WORDS[wordIdx];
    if (!deleting && displayed.length < word.length) {
      timeoutRef.current = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === word.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIdx((wordIdx + 1) % WORDS.length);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, deleting, wordIdx]);

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', paddingTop: 80 }} className="grid-bg">
      {/* Blobs */}
      <div style={{
        position: 'absolute', top: '15%', left: '8%',
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(40px)', pointerEvents: 'none',
      }} className="animate-blob" />
      <div style={{
        position: 'absolute', bottom: '10%', right: '8%',
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(34,211,238,0.1) 0%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(40px)', pointerEvents: 'none',
        animationDelay: '3s',
      }} className="animate-blob" />
      <div style={{
        position: 'absolute', top: '50%', right: '25%',
        width: 300, height: 300,
        background: 'radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(40px)', pointerEvents: 'none',
        animationDelay: '6s',
      }} className="animate-blob" />

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 24 }}
        >
          <span className="section-badge">
            <Sparkles size={12} />
            Available for Opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: 'clamp(48px, 8vw, 88px)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-2px',
            color: 'var(--text-primary)',
            marginBottom: 12,
          }}
        >
          Ashutosh{' '}
          <span className="gradient-text">Bari</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          style={{
            fontSize: 'clamp(22px, 3.5vw, 34px)',
            fontWeight: 600,
            color: 'var(--text-secondary)',
            marginBottom: 20,
            fontFamily: 'JetBrains Mono, monospace',
            minHeight: 48,
          }}
        >
          &gt;_{' '}
          <span style={{ color: '#6366f1' }}>{displayed}</span>
          <span className="type-cursor" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{
            fontSize: 'clamp(16px, 2vw, 20px)',
            color: 'var(--text-secondary)',
            maxWidth: 600,
            margin: '0 auto 36px',
            lineHeight: 1.7,
          }}
        >
          "Building Real-Time Intelligent Vision Systems"
          <span style={{ display: 'block', marginTop: 8, fontSize: 14, color: 'var(--text-muted)' }}>
            Pune, India 🇮🇳
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="btn-primary"
            onClick={() => handleScroll('projects')}
            style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 16, padding: '14px 32px' }}
          >
            View Projects <span>→</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="btn-secondary"
            onClick={() => handleScroll('contact')}
            style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 16, padding: '14px 32px' }}
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ display: 'flex', gap: 16, justifyContent: 'center', marginBottom: 64 }}
        >
          {[
            { icon: <GithubIcon size={18} />, href: 'https://github.com/ashutoshbari', label: 'GitHub' },
            { icon: <LinkedinIcon size={18} />, href: 'https://linkedin.com/in/ashutoshbari', label: 'LinkedIn' },
            { icon: <Mail size={18} />, href: 'mailto:ashutoshbariofficial@gmail.com', label: 'Email' },
          ].map(social => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.15, y: -3 }}
              style={{
                width: 44, height: 44,
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 12,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'all 0.25s',
              }}
              title={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
          className="animate-float"
        >
          <span style={{ fontSize: 12, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll to explore</span>
          <ArrowDown size={16} color="var(--text-muted)" />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          style={{
            display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap',
            marginTop: 56,
            paddingTop: 32,
            borderTop: '1px solid var(--border)',
          }}
        >
          {[
            { value: '30+', label: 'FPS Real-time' },
            { value: '5+', label: 'AI Projects' },
            { value: 'YOLOv8', label: 'Production' },
            { value: '100%', label: 'Passion' },
          ].map(stat => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: 28, color: 'var(--text-primary)' }} className="gradient-text-purple">
                {stat.value}
              </div>
              <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
