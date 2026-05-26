'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects, Project } from '@/lib/projects'
import ProjectCard from '@/components/work/ProjectCard'
import ProjectModal from '@/components/work/ProjectModal'
import AnimatedText from '@/components/ui/AnimatedText'

const roles = ['All', 'Filmmaking & Editing', 'Social Media', 'Marketing & Growth', 'Branding', 'Influencer Management', 'Volunteering'] as const
const skills = ['All', 'Video Production', 'Social Media Management', 'Content Creation', 'Brand Strategy', 'Event Coverage', 'Campaign Strategy', 'Copywriting'] as const

const INITIAL_LIMIT = 3

export default function Work() {
  const [activeRole, setActiveRole] = useState<string>('All')
  const [activeSkill, setActiveSkill] = useState<string>('All')
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [expanded, setExpanded] = useState(false)

  const filtered = projects.filter((p) => {
    const roleMatch = activeRole === 'All' || p.roles.includes(activeRole)
    const skillMatch = activeSkill === 'All' || p.skills.includes(activeSkill)
    return roleMatch && skillMatch
  })

  const visible = expanded ? filtered : filtered.slice(0, INITIAL_LIMIT)
  const hasMore = filtered.length > INITIAL_LIMIT

  function resetFilters(role: string, skill: string) {
    setActiveRole(role)
    setActiveSkill(skill)
    setExpanded(false)
  }

  return (
    <section id="work" className="bg-white py-20 sm:py-28">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-caveat text-lg mb-3"
              style={{ color: '#D4775A' }}
            >
              Portfolio
            </motion.p>
            <AnimatedText
              text="My latest work"
              tag="h2"
              className="font-cormorant font-bold text-black"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.01em', lineHeight: 1 }}
            />
          </div>
        </div>

        {/* Role filter */}
        <div className="mb-3">
          <p className="font-tight text-xs text-muted mb-2 uppercase tracking-widest">Role</p>
          <div className="flex flex-wrap gap-2">
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => resetFilters(role, activeSkill)}
                className={`pill-btn text-sm transition-all duration-200 ${
                  activeRole === role
                    ? 'bg-accent text-white'
                    : 'bg-surface text-black/60 hover:text-black hover:bg-black/8'
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        {/* Skills filter */}
        <div className="mb-8">
          <p className="font-tight text-xs text-muted mb-2 uppercase tracking-widest">Skills</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <button
                key={skill}
                onClick={() => resetFilters(activeRole, skill)}
                className={`pill-btn text-sm transition-all duration-200 ${
                  activeSkill === skill
                    ? 'bg-accent text-white'
                    : 'bg-surface text-black/60 hover:text-black hover:bg-black/8'
                }`}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        {/* Project count */}
        <motion.p layout className="text-xs text-muted mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
          {filtered.length} project{filtered.length !== 1 ? 's' : ''}
        </motion.p>

        {/* Project list */}
        <div className="flex flex-col gap-4">
          {visible.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={i}
              onClick={() => setActiveProject(project)}
            />
          ))}
        </div>

        {/* Expand / collapse */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 flex justify-center"
          >
            <button
              onClick={() => setExpanded(prev => !prev)}
              className="pill-btn bg-surface text-black/70 hover:bg-black hover:text-white transition-all duration-200 text-base font-medium flex items-center gap-2"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              {expanded ? (
                <><span>Show less</span><span className="text-base">↑</span></>
              ) : (
                <><span>Show all {filtered.length} projects</span><span className="text-base">↓</span></>
              )}
            </button>
          </motion.div>
        )}
      </div>

      {/* Project modal */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  )
}
