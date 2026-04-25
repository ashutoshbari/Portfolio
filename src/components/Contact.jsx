import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const contactLinks = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'ashutoshbariofficial@gmail.com',
    href: 'mailto:ashutoshbariofficial@gmail.com',
    color: '#6366f1',
    bg: 'rgba(99,102,241,0.08)',
  },
  {
    icon: <GithubIcon size={20} />,
    label: 'GitHub',
    value: 'github.com/ashutoshbari',
    href: 'https://github.com/ashutoshbari',
    color: '#e2e8f0',
    bg: 'rgba(226,232,240,0.06)',
  },
  {
    icon: <LinkedinIcon size={20} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/ashutoshbari',
    href: 'https://linkedin.com/in/ashutoshbari',
    color: '#0ea5e9',
    bg: 'rgba(14,165,233,0.08)',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Location',
    value: 'Pune, Maharashtra, India',
    href: null,
    color: '#10b981',
    bg: 'rgba(16,185,129,0.08)',
  },
];

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.15 });
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate send (open mailto as fallback)
    setTimeout(() => {
      const body = encodeURIComponent(`Name: ${form.name}\n\n${form.message}`);
      const subject = encodeURIComponent(form.subject || 'Portfolio Contact');
      window.open(`mailto:ashutoshbariofficial@gmail.com?subject=${subject}&body=${body}`);
      setSent(true);
      setLoading(false);
    }, 1200);
  };

  return (
    <section id="contact" style={{ padding: '100px 0' }} ref={ref}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <div className="section-badge" style={{ justifyContent: 'center' }}>Get In Touch</div>
          <h2 style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 800,
            letterSpacing: '-1px',
            color: 'var(--text-primary)',
          }}>
            Let's <span className="gradient-text">Build Together</span>
          </h2>
          <p style={{ marginTop: 16, fontSize: 16, color: 'var(--text-secondary)', maxWidth: 520, margin: '16px auto 0' }}>
            Have a project in mind or want to discuss AI opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48 }}>
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65 }}
          >
            <h3 style={{
              fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 22,
              color: 'var(--text-primary)', marginBottom: 8,
            }}>
              Contact Information
            </h3>
            <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 32 }}>
              I'm currently open to internships, full-time roles, and freelance AI/ML projects. Let's connect!
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
              {contactLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.15 + i * 0.1 }}
                >
                  {link.href ? (
                    <a href={link.href} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                      <div className="card" style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer' }}>
                        <div style={{
                          width: 42, height: 42, borderRadius: 11, flexShrink: 0,
                          background: link.bg, display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: link.color,
                        }}>
                          {link.icon}
                        </div>
                        <div>
                          <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{link.label}</div>
                          <div style={{ fontSize: 14, color: 'var(--text-primary)', fontWeight: 500, marginTop: 2 }}>{link.value}</div>
                        </div>
                        <div style={{ marginLeft: 'auto', color: 'var(--text-muted)', fontSize: 18 }}>→</div>
                      </div>
                    </a>
                  ) : (
                    <div className="card" style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 14 }}>
                      <div style={{
                        width: 42, height: 42, borderRadius: 11, flexShrink: 0,
                        background: link.bg, display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: link.color,
                      }}>
                        {link.icon}
                      </div>
                      <div>
                        <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{link.label}</div>
                        <div style={{ fontSize: 14, color: 'var(--text-primary)', fontWeight: 500, marginTop: 2 }}>{link.value}</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Status */}
            <div className="card" style={{ padding: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ position: 'relative', width: 12, height: 12 }}>
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#10b981' }} className="animate-pulse-glow" />
              </div>
              <div>
                <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)' }}>Available for new opportunities</span>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>Usually replies within 24 hours</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            <div className="card" style={{ padding: 32 }}>
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: 'center', padding: '40px 0' }}
                >
                  <CheckCircle size={56} color="#10b981" style={{ margin: '0 auto 16px' }} />
                  <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 22, color: 'var(--text-primary)', marginBottom: 8 }}>Message Sent!</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 15, marginBottom: 24 }}>
                    Your email client should have opened. I'll get back to you soon!
                  </p>
                  <button className="btn-primary" onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }); }}>
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit}>
                  <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 20, color: 'var(--text-primary)', marginBottom: 24 }}>
                    Send a Message
                  </h3>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 8 }}>
                        Your Name
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="contact-input"
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 8 }}>
                        Email Address
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="contact-input"
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: 16 }}>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 8 }}>
                      Subject
                    </label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Project Collaboration / Job Opportunity / etc."
                      className="contact-input"
                    />
                  </div>

                  <div style={{ marginBottom: 24 }}>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 8 }}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project or opportunity..."
                      rows={5}
                      className="contact-input"
                      style={{ resize: 'vertical', minHeight: 120 }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="btn-primary"
                    disabled={loading}
                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, fontSize: 15, padding: '14px', opacity: loading ? 0.8 : 1 }}
                  >
                    {loading ? (
                      <>
                        <div style={{ width: 16, height: 16, border: '2px solid rgba(255,255,255,0.3)', borderTop: '2px solid white', borderRadius: '50%', animation: 'spin-slow 0.8s linear infinite' }} />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
