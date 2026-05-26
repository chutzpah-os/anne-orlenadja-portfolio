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
        <div className="mb-10">
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

        {/* ── Filter panel ────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="mb-10 rounded-[20px] border border-black/[0.07] overflow-hidden"
        >

          {/* Role row */}
          <div className="flex flex-col sm:flex-row sm:items-start gap-0 px-4 sm:px-6 pt-4 sm:pt-5 pb-4 sm:pb-5">
            {/* Label */}
            <div className="shrink-0 sm:w-20 mb-2 sm:mb-0 pt-0.5">
              <span
                className="font-caveat text-base leading-none"
                style={{ color: '#D4775A' }}
              >
                Role
              </span>
            </div>

            {/* Role items — editorial text buttons */}
            <div className="flex flex-wrap gap-x-1 gap-y-1">
              {roles.map((role) => (
                <button
                  key={role}
                  onClick={() => resetFilters(role, activeSkill)}
                  className="relative px-2 py-1 group"
                >
                  <span
                    className="font-cormorant text-[0.95rem] font-medium transition-colors duration-200 leading-none"
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      color: activeRole === role ? '#000' : 'rgba(0,0,0,0.32)',
                    }}
                  >
                    {role}
                  </span>
                  {activeRole === role ? (
                    <motion.span
                      layoutId="role-underline"
                      className="absolute bottom-0 left-2 right-2 h-[1.5px] rounded-full"
                      style={{ backgroundColor: '#D4775A' }}
                      transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                    />
                  ) : (
                    <span className="absolute bottom-0 left-2 right-2 h-[1px] rounded-full bg-black/0 group-hover:bg-black/12 transition-colors duration-200" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="mx-4 sm:mx-6 border-t border-black/[0.06]" />

          {/* Skills row */}
          <div className="flex flex-col sm:flex-row sm:items-start gap-0 px-4 sm:px-6 pt-4 pb-4 sm:pb-5">
            {/* Label */}
            <div className="shrink-0 sm:w-20 mb-2 sm:mb-0 pt-1.5">
              <span
                className="font-caveat text-base leading-none"
                style={{ color: '#D4775A' }}
              >
                Skills
              </span>
            </div>

            {/* Skill pills — bordered, minimal */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <button
                  key={skill}
                  onClick={() => resetFilters(activeRole, skill)}
                  className="font-tight text-xs px-3 py-1.5 rounded-full border transition-all duration-200"
                  style={
                    activeSkill === skill
                      ? { backgroundColor: '#D4775A', color: '#fff', borderColor: '#D4775A' }
                      : { backgroundColor: 'transparent', color: 'rgba(0,0,0,0.45)', borderColor: 'rgba(0,0,0,0.12)' }
                  }
                  onMouseEnter={e => {
                    if (activeSkill !== skill) {
                      (e.currentTarget as HTMLButtonElement).style.color = 'rgba(0,0,0,0.8)'
                      ;(e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(0,0,0,0.3)'
                    }
                  }}
                  onMouseLeave={e => {
                    if (activeSkill !== skill) {
                      (e.currentTarget as HTMLButtonElement).style.color = 'rgba(0,0,0,0.45)'
                      ;(e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(0,0,0,0.12)'
                    }
                  }}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>

        </motion.div>
        {/* ── end Filter panel ──────────────────────────────────────── */}

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
              className="pill-btn bg-accent text-white hover:opacity-85 transition-opacity text-base font-medium flex items-center gap-2"
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
