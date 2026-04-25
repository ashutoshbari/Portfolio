import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ExternalLink, Zap, Eye, Activity, BarChart2, Bot, Battery } from 'lucide-react';
import { GithubIcon } from './Icons';

const projects = [
  {
    id: 1,
    title: 'AI Traffic Monitoring System (ATCC)',
    category: 'AI',
    emoji: '🚦',
    color: '#6366f1',
    icon: <Eye size={20} />,
    description: 'Production-grade real-time traffic violation detection system using multi-object tracking and motion analysis on live camera feeds.',
    longDesc: 'Detects opposite-direction vehicles, triple-seat violations, illegal parking, and overspeeding — all at 30+ FPS on live RTSP streams.',
    tech: ['YOLOv8', 'OpenCV', 'RTSP', 'Python', 'Docker', 'ByteTrack'],
    highlights: ['30+ FPS Inference', 'Multi-Violation Detection', 'RTSP Stream Processing', 'Reduced Latency Pipeline'],
    impact: '30+ FPS real-time inference with multi-class violation detection deployed in production.',
    github: 'https://github.com/ashutoshbari',
    featured: true,
  },
  {
    id: 2,
    title: 'Real-Time Smoking Detection System',
    category: 'AI',
    emoji: '🚬',
    color: '#ec4899',
    icon: <Activity size={20} />,
    description: 'RTSP-based surveillance system using YOLOv8 for real-time smoking detection with automatic alerting and a Streamlit monitoring dashboard.',
    longDesc: 'Processes live camera streams, triggers real-time alerts with automatic snapshot capture whenever a smoking violation is detected.',
    tech: ['YOLOv8', 'OpenCV', 'RTSP', 'Streamlit', 'Python', 'Flask'],
    highlights: ['Real-Time Alerts', 'Snapshot Capture', 'Streamlit Dashboard', 'Live RTSP Streams'],
    impact: 'Real-time detection with automated alerts and centralized monitoring dashboard.',
    github: 'https://github.com/ashutoshbari',
    featured: true,
  },
  {
    id: 3,
    title: 'AI Bot – Intelligent Chatbot',
    category: 'AI',
    emoji: '🤖',
    color: '#22d3ee',
    icon: <Bot size={20} />,
    description: 'Context-aware intelligent chatbot for automation and user interaction, built with NLP and scalable backend API integration.',
    longDesc: 'Supports real-time responses, multi-turn conversations, and is optimized for low latency at scale using a modern backend stack.',
    tech: ['Python', 'NLP', 'Flask API', 'React', 'Docker', 'REST'],
    highlights: ['Real-Time Responses', 'Context-Aware', 'Scalable Architecture', 'API Integration'],
    impact: 'Automated user interactions with intelligent, context-aware multi-turn conversations.',
    github: 'https://github.com/ashutoshbari',
    featured: true,
  },
  {
    id: 4,
    title: 'Battery Health Prediction',
    category: 'ML',
    emoji: '🔋',
    color: '#10b981',
    icon: <Battery size={20} />,
    description: 'Predictive ML models (Linear Regression & Random Forest) for battery health estimation with Flask API deployment and rich performance metrics.',
    longDesc: 'Trained, evaluated, and deployed models with R² and MSE metrics, served via a Flask REST API for easy integration.',
    tech: ['Python', 'Scikit-learn', 'Random Forest', 'Flask', 'NumPy', 'Pandas'],
    highlights: ['R² & MSE Metrics', 'Flask API', 'Random Forest', 'Linear Regression'],
    impact: 'Accurate health predictions served via production API with strong evaluation metrics.',
    github: 'https://github.com/ashutoshbari',
    featured: false,
  },
  {
    id: 5,
    title: 'Amazon Sales Analytics',
    category: 'Data',
    emoji: '📦',
    color: '#f59e0b',
    icon: <BarChart2 size={20} />,
    description: 'End-to-end data analytics project with SQL-based data extraction and interactive Power BI dashboards for product and sales performance insights.',
    longDesc: 'Comprehensive sales analytics covering product categories, revenue trends, customer behavior, and marketplace KPIs.',
    tech: ['Power BI', 'SQL', 'DAX', 'Python', 'Pandas', 'Excel'],
    highlights: ['Interactive Dashboards', 'SQL Analytics', 'KPI Tracking', 'Revenue Insights'],
    impact: 'Actionable business insights through interactive multi-page Power BI dashboards.',
    github: 'https://github.com/ashutoshbari',
    featured: false,
  },
];

const FILTERS = ['All', 'AI', 'ML', 'Data'];

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView({ threshold: 0.15 });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: 'relative' }}
    >
      {project.featured && (
        <div style={{
          position: 'absolute', top: -10, right: 20, zIndex: 2,
          background: 'linear-gradient(135deg, #6366f1, #22d3ee)',
          color: 'white', fontSize: 11, fontWeight: 700,
          padding: '4px 12px', borderRadius: 100,
          letterSpacing: '0.05em', textTransform: 'uppercase',
        }}>
          ⚡ Featured
        </div>
      )}

      <div
        className="card"
        style={{
          padding: 28,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderColor: hovered ? project.color + '44' : 'var(--border)',
          boxShadow: hovered ? `0 20px 60px ${project.color}15` : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 16 }}>
          <div style={{
            width: 52, height: 52, borderRadius: 14, fontSize: 24, flexShrink: 0,
            background: project.color + '15',
            border: `1px solid ${project.color}25`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {project.emoji}
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 18, color: 'var(--text-primary)', lineHeight: 1.2, marginBottom: 4 }}>
              {project.title}
            </h3>
            <span style={{
              fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 100,
              background: project.color + '15', color: project.color,
              border: `1px solid ${project.color}25`,
            }}>
              {project.category}
            </span>
          </div>
        </div>

        {/* Description */}
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 16, flex: 1 }}>
          {project.description}
        </p>

        {/* Highlights */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
          {project.highlights.map(h => (
            <span key={h} style={{
              fontSize: 12, color: project.color, fontWeight: 600,
              background: project.color + '10', border: `1px solid ${project.color}20`,
              padding: '4px 10px', borderRadius: 6,
            }}>
              ✓ {h}
            </span>
          ))}
        </div>

        {/* Tech Stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
          {project.tech.map(t => (
            <span key={t} className="tech-badge">{t}</span>
          ))}
        </div>

        {/* Impact */}
        <div style={{
          background: 'rgba(99,102,241,0.05)', border: '1px solid rgba(99,102,241,0.1)',
          borderRadius: 10, padding: '12px 16px', marginBottom: 20,
        }}>
          <span style={{ fontSize: 11, color: '#6366f1', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Impact</span>
          <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 4, lineHeight: 1.5 }}>{project.impact}</p>
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', gap: 12 }}>
          <a href={project.github} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', flex: 1 }}>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                background: 'var(--bg-secondary)', border: '1px solid var(--border)',
                borderRadius: 10, padding: '10px', fontSize: 14, fontWeight: 600,
                color: 'var(--text-secondary)', cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
                            <GithubIcon size={15} /> Code
            </motion.button>
          </a>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              background: `linear-gradient(135deg, ${project.color}, ${project.color}bb)`,
              border: 'none', borderRadius: 10, padding: '10px', fontSize: 14, fontWeight: 600,
              color: 'white', cursor: 'pointer',
            }}
          >
            <ExternalLink size={15} /> Demo
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.05 });
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" style={{ padding: '100px 0' }} ref={ref}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 48 }}
        >
          <div className="section-badge" style={{ justifyContent: 'center' }}>Portfolio</div>
          <h2 style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 800,
            letterSpacing: '-1px',
            color: 'var(--text-primary)',
          }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p style={{ marginTop: 16, fontSize: 16, color: 'var(--text-secondary)', maxWidth: 520, margin: '16px auto 0' }}>
            Real-world AI systems built end-to-end — from model training to production deployment.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ display: 'flex', gap: 12, justifyContent: 'center', marginBottom: 48, flexWrap: 'wrap' }}
        >
          {FILTERS.map(f => (
            <button
              key={f}
              className={`filter-pill ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f === 'All' ? '🌐 All' : f === 'AI' ? '🤖 AI / Vision' : f === 'ML' ? '🧠 Machine Learning' : '📊 Data Analytics'}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: 24,
            }}
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{ textAlign: 'center', marginTop: 56 }}
        >
          <a href="https://github.com/ashutoshbari" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="btn-secondary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 15, padding: '14px 32px' }}
            >
                            <GithubIcon size={18} />
              View All on GitHub →
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
