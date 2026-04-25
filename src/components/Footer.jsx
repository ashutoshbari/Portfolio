import { motion } from 'framer-motion';
import { Mail, Heart, Cpu, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)', paddingTop: 56 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        {/* Top row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 48, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 36, height: 36, background: 'linear-gradient(135deg, #6366f1, #22d3ee)',
                borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Cpu size={18} color="white" />
              </div>
              <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 18, color: 'var(--text-primary)' }}>
                Ashutosh<span style={{ color: '#6366f1' }}>.</span>
              </span>
            </div>
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 20, maxWidth: 240 }}>
              AI Engineer building real-time intelligent vision systems that work in the real world.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {[
                              { icon: <GithubIcon size={16} />, href: 'https://github.com/ashutoshbari' },
                { icon: <LinkedinIcon size={16} />, href: 'https://linkedin.com/in/ashutoshbari' },
                { icon: <Mail size={16} />, href: 'mailto:ashutoshbariofficial@gmail.com' },
              ].map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  style={{
                    width: 36, height: 36, borderRadius: 9,
                    background: 'var(--bg-card)', border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-secondary)', textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--text-primary)', marginBottom: 20, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Navigation
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' }); }}
                  style={{ fontSize: 14, color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s', cursor: 'pointer' }}
                  onMouseEnter={e => e.target.style.color = '#6366f1'}
                  onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--text-primary)', marginBottom: 20, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Core Tech
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['Python', 'YOLOv8', 'OpenCV', 'Docker', 'Flask', 'NumPy', 'RTSP', 'SQL'].map(t => (
                <span key={t} className="tech-badge" style={{ fontSize: 12 }}>{t}</span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--text-primary)', marginBottom: 20, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Hire Me
            </div>
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 16 }}>
              Open to AI/ML roles, computer vision projects, and research collaborations.
            </p>
            <a href="mailto:ashutoshbariofficial@gmail.com" style={{ textDecoration: 'none' }}>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="btn-primary"
                style={{ fontSize: 14, padding: '10px 22px' }}
              >
                <Mail size={14} style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle' }} />
                Get In Touch
              </motion.button>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'var(--border)', marginBottom: 24 }} />

        {/* Bottom row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, paddingBottom: 28 }}>
          <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>
            © 2025 Ashutosh Bari · Built with{' '}
            <Heart size={12} style={{ display: 'inline', color: '#ec4899', verticalAlign: 'middle' }} />
            {' '}using React + Tailwind
          </div>
          <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>
            Pune, India 🇮🇳 · AI Engineer
          </div>
          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollTop}
            style={{
              width: 36, height: 36, borderRadius: 9,
              background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
              border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: 'white',
            }}
            title="Back to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
