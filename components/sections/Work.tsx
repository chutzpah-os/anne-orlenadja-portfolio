'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects, Project } from '@/lib/projects'
import ProjectCard from '@/components/work/ProjectCard'
import ProjectModal from '@/components/work/ProjectModal'
import AnimatedText from '@/components/ui/AnimatedText'

const categories = ['All', 'Campaigns', 'Branding', 'Content', 'Events', 'Institutional'] as const

export default function Work() {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

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
              className="font-tight text-xs text-muted font-medium tracking-widest uppercase mb-3"
            >
              Portfolio
            </motion.p>
            <AnimatedText
              text="My latest work"
              tag="h2"
              className="font-tight font-bold text-black"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', lineHeight: 1 }}
            />
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`pill-btn text-sm transition-all duration-200 ${
                  activeCategory === cat
                    ? 'pill-btn-dark'
                    : 'bg-surface text-black/60 hover:text-black hover:bg-black/8'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project count */}
        <motion.p layout className="font-tight text-xs text-muted mb-6">
          {filtered.length} project{filtered.length !== 1 ? 's' : ''}
        </motion.p>

        {/* Project list */}
        <div className="flex flex-col gap-4">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={i}
              onClick={() => setActiveProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Project modal */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  )
}
