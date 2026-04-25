import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Briefcase, CheckCircle } from 'lucide-react';

const experiences = [
  {
    title: 'AI Engineer Intern',
    company: 'Futops Technologies',
    location: 'Pune, India',
    period: '2024 – Present',
    type: 'Internship',
    color: '#6366f1',
    description: 'Developed and deployed production-grade AI vision systems for real-world surveillance and traffic monitoring use cases.',
    responsibilities: [
      'Deployed YOLOv8 models in production for real-time object detection and classification',
      'Engineered real-time surveillance systems processing live RTSP camera streams at 30+ FPS',
      'Dockerized AI services for seamless deployment and environment consistency',
      'Built and optimized RTSP stream processing pipelines with reduced latency',
      'Improved detection accuracy using mAP evaluation metrics and model fine-tuning',
      'Developed multi-object tracking pipelines using ByteTrack for violation detection',
      'Built automated alert systems with snapshot capture and reporting dashboards',
    ],
    tags: ['YOLOv8', 'Docker', 'RTSP', 'Python', 'OpenCV', 'Production AI'],
  },
];

const achievements = [
  { emoji: '⚡', title: '30+ FPS Real-Time Inference', desc: 'Achieved production-grade inference speed on live RTSP streams with optimized YOLOv8 pipelines.' },
  { emoji: '🏭', title: 'Production AI Systems', desc: 'Built and deployed end-to-end Dockerized AI services running in live production environments.' },
  { emoji: '🎯', title: 'Improved Model Accuracy', desc: 'Boosted detection performance using mAP metrics, fine-tuning, and strategic data augmentation.' },
  { emoji: '🚀', title: 'Reduced Latency Pipeline', desc: 'Optimized the inference and streaming pipeline to minimize end-to-end processing latency.' },
  { emoji: '🔍', title: 'Multi-Violation Detection', desc: 'Built systems detecting 4+ violation types simultaneously with high precision in traffic monitoring.' },
  { emoji: '📦', title: 'End-to-End ML Delivery', desc: 'Handled the complete ML lifecycle from data collection and training to API deployment.' },
];

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="experience" style={{ padding: '100px 0', background: 'var(--bg-secondary)' }} ref={ref}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <div className="section-badge" style={{ justifyContent: 'center' }}>Experience</div>
          <h2 style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 800,
            letterSpacing: '-1px',
            color: 'var(--text-primary)',
          }}>
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 48 }}>
          {/* Timeline */}
          <div>
            <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 22, color: 'var(--text-primary)', marginBottom: 32, display: 'flex', alignItems: 'center', gap: 10 }}>
              <Briefcase size={20} color="#6366f1" /> Career Timeline
            </h3>

            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                style={{ display: 'flex', gap: 20 }}
              >
                {/* Timeline line */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div className="timeline-dot" />
                  <div style={{ width: 2, flex: 1, background: 'var(--border)', marginTop: 8 }} />
                </div>

                {/* Content */}
                <div className="card" style={{ padding: 24, marginBottom: 24, flex: 1 }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12, gap: 8 }}>
                    <div>
                      <h4 style={{ fontWeight: 700, fontSize: 17, color: 'var(--text-primary)', marginBottom: 4 }}>{exp.title}</h4>
                      <div style={{ fontWeight: 600, fontSize: 14, color: exp.color }}>{exp.company}</div>
                      <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 2 }}>{exp.location}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{
                        fontSize: 12, fontWeight: 700, padding: '4px 10px', borderRadius: 100,
                        background: exp.color + '15', color: exp.color, marginBottom: 4,
                      }}>{exp.period}</div>
                      <div style={{
                        fontSize: 11, fontWeight: 600, padding: '3px 8px', borderRadius: 100,
                        background: 'rgba(16,185,129,0.1)', color: '#10b981',
                      }}>{exp.type}</div>
                    </div>
                  </div>

                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: 16 }}>{exp.description}</p>

                  <ul style={{ listStyle: 'none', padding: 0, marginBottom: 20 }}>
                    {exp.responsibilities.map((r, ri) => (
                      <motion.li
                        key={ri}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + ri * 0.07 }}
                        style={{ display: 'flex', gap: 10, marginBottom: 10, fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.5 }}
                      >
                        <CheckCircle size={15} style={{ flexShrink: 0, color: '#10b981', marginTop: 2 }} />
                        {r}
                      </motion.li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {exp.tags.map(t => (
                      <span key={t} className="tech-badge">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievements */}
          <div>
            <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 22, color: 'var(--text-primary)', marginBottom: 32, display: 'flex', alignItems: 'center', gap: 10 }}>
              🏆 Key Achievements
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {achievements.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className="card"
                  style={{ padding: 20, display: 'flex', gap: 16, alignItems: 'flex-start' }}
                >
                  <div style={{
                    width: 44, height: 44, flexShrink: 0, fontSize: 22,
                    background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(34,211,238,0.08))',
                    borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {a.emoji}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--text-primary)', marginBottom: 4 }}>{a.title}</div>
                    <div style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5 }}>{a.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
