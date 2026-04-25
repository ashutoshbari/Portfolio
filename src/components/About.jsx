import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Cpu, Zap, Target, Code2 } from 'lucide-react';

const highlights = [
  { icon: <Cpu size={20} />, label: 'Computer Vision', desc: 'YOLOv8, OpenCV, Multi-Object Tracking' },
  { icon: <Zap size={20} />, label: 'Real-Time AI', desc: '30+ FPS inference, RTSP stream processing' },
  { icon: <Target size={20} />, label: 'MLOps', desc: 'Docker, Flask, production deployment' },
  { icon: <Code2 size={20} />, label: 'Full ML Pipelines', desc: 'End-to-end from data to deployment' },
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section id="about" style={{ padding: '100px 0' }} ref={ref}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 64, alignItems: 'center' }}>

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="section-badge">About Me</div>
            <h2 style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 800,
              lineHeight: 1.15,
              color: 'var(--text-primary)',
              marginBottom: 24,
              letterSpacing: '-1px',
            }}>
              Building AI that
              <span className="gradient-text"> sees the world</span>
            </h2>

            <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: 20 }}>
              I'm an <strong style={{ color: 'var(--text-primary)' }}>AI Engineer</strong> specializing in real-time computer vision systems with hands-on experience building and deploying production-grade ML pipelines. My work bridges the gap between research and real-world deployment.
            </p>
            <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: 20 }}>
              With deep expertise in <strong style={{ color: '#6366f1' }}>YOLOv8</strong>, OpenCV, and multi-object tracking, I architect high-performance vision systems capable of achieving <strong style={{ color: '#22d3ee' }}>30+ FPS real-time inference</strong> on live RTSP streams.
            </p>
            <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.85 }}>
              From optimized inference pipelines and Dockerized AI services to end-to-end ML applications — I engineer systems that are not just accurate, but <em>fast, reliable, and deployable at scale</em> in production environments.
            </p>

            <div style={{ display: 'flex', gap: 16, marginTop: 32 }}>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="btn-primary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Work Together
              </motion.button>
              <a href="https://github.com/ashutoshbari" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="btn-secondary"
                >
                  GitHub →
                </motion.button>
              </a>
            </div>
          </motion.div>

          {/* Right: Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="card"
                style={{ padding: 24, cursor: 'default' }}
              >
                <div style={{
                  width: 44, height: 44,
                  background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(34,211,238,0.1))',
                  borderRadius: 12,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#6366f1',
                  marginBottom: 16,
                }}>
                  {item.icon}
                </div>
                <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--text-primary)', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.5 }}>{item.desc}</div>
              </motion.div>
            ))}

            {/* Location card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="card"
              style={{ padding: 24, gridColumn: '1/-1', display: 'flex', alignItems: 'center', gap: 16 }}
            >
              <div style={{ fontSize: 36 }}>🇮🇳</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--text-primary)' }}>Pune, India</div>
                <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>Open to Remote & Hybrid Opportunities</div>
              </div>
              <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 8, height: 8, background: '#10b981', borderRadius: '50%' }} className="animate-pulse-glow" />
                <span style={{ fontSize: 13, color: '#10b981', fontWeight: 600 }}>Available</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
