import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const skillGroups = [
  {
    category: 'Programming',
    emoji: '🐍',
    color: '#6366f1',
    bg: 'rgba(99,102,241,0.08)',
    skills: [
      { name: 'Python', level: 92 },
      { name: 'NumPy', level: 88 },
      { name: 'Pandas', level: 86 },
      { name: 'Scikit-learn', level: 84 },
    ],
  },
  {
    category: 'Computer Vision',
    emoji: '👁️',
    color: '#22d3ee',
    bg: 'rgba(34,211,238,0.08)',
    skills: [
      { name: 'YOLOv8', level: 94 },
      { name: 'OpenCV', level: 90 },
      { name: 'Object Detection', level: 92 },
      { name: 'Multi-Object Tracking', level: 88 },
    ],
  },
  {
    category: 'MLOps & Infra',
    emoji: '⚙️',
    color: '#ec4899',
    bg: 'rgba(236,72,153,0.08)',
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'Flask', level: 82 },
      { name: 'Linux', level: 80 },
      { name: 'Git', level: 88 },
    ],
  },
  {
    category: 'Data & BI',
    emoji: '📊',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.08)',
    skills: [
      { name: 'SQL', level: 80 },
      { name: 'Power BI', level: 78 },
      { name: 'Tableau', level: 75 },
    ],
  },
];

function SkillBar({ name, level, color, delay }) {
  const [ref, inView] = useInView({ threshold: 0.3 });
  return (
    <div ref={ref} style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-secondary)', fontFamily: 'JetBrains Mono, monospace' }}>{name}</span>
        <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{level}%</span>
      </div>
      <div style={{ height: 4, background: 'var(--border)', borderRadius: 4, overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay || 0, ease: 'easeOut' }}
          style={{ height: '100%', borderRadius: 4, background: `linear-gradient(90deg, ${color}, ${color}aa)` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="skills" style={{ padding: '100px 0', background: 'var(--bg-secondary)' }} ref={ref}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <div className="section-badge" style={{ justifyContent: 'center' }}>Technical Skills</div>
          <h2 style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 800,
            letterSpacing: '-1px',
            color: 'var(--text-primary)',
          }}>
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p style={{ marginTop: 16, fontSize: 16, color: 'var(--text-secondary)', maxWidth: 500, margin: '16px auto 0' }}>
            A focused set of tools I use to build intelligent, production-ready systems.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.12 }}
              className="card"
              style={{ padding: 28 }}
            >
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12, fontSize: 20,
                  background: group.bg, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: `1px solid ${group.color}22`,
                }}>
                  {group.emoji}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--text-primary)' }}>{group.category}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{group.skills.length} skills</div>
                </div>
              </div>

              {/* Skill Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
                {group.skills.map(s => (
                  <span
                    key={s.name}
                    className="skill-tag"
                    style={{
                      background: group.bg,
                      borderColor: `${group.color}22`,
                      color: group.color,
                    }}
                  >
                    {s.name}
                  </span>
                ))}
              </div>

              {/* Progress bars */}
              <div>
                {group.skills.map((skill, si) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} color={group.color} delay={si * 0.1} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
