'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Project } from '@/lib/projects'

interface ProjectCardProps {
  project: Project
  index: number
  onClick: () => void
}

const rotations = [-3, 4, -2, 5, -4, 3, -5, 2, -3, 4, -2, 5, -4, 3, -2]

const roleGradients: Record<string, string> = {
  'Filmmaking & Editing':  'from-[#f4eee8] to-[#e8d5c4]',
  'Social Media':          'from-[#eaf4fb] to-[#c5e1f5]',
  'Marketing & Growth':    'from-[#eafaf1] to-[#b7e4c7]',
  'Branding':              'from-[#fdf2e9] to-[#f5d5b0]',
  'Influencer Management': 'from-[#fdf0f8] to-[#f5c6e8]',
  'Volunteering':          'from-[#f4f6f7] to-[#d5d8dc]',
}

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const rot = rotations[index % rotations.length]
  const primaryRole = project.roles[0] ?? ''
  const gradient = roleGradients[primaryRole] ?? 'from-surface to-black/8'

  return (
    <motion.button
      onClick={onClick}
      className="w-full text-left group"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.04 }}
    >
      <div className="project-card bg-surface rounded-[24px] overflow-hidden" style={{ padding: '32px' }}>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">

          {/* Left: text info */}
          <div className="sm:w-1/2">
            <span className="font-cormorant text-sm text-muted font-medium block mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
              {project.roles[0]} · {project.year}
            </span>
            <h3
              className="font-cormorant font-bold text-black transition-colors duration-300 leading-tight"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)', letterSpacing: '-0.01em' }}
            >
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-x-3 gap-y-1 mt-3">
              {project.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="font-tight text-xs text-muted">{tag}</span>
              ))}
            </div>
            <div className="mt-5">
              <span className="inline-flex items-center gap-2 font-cormorant text-base font-medium text-black/60 group-hover:text-black group-hover:gap-3 transition-all duration-300">
                View project <span className="text-base">→</span>
              </span>
            </div>
          </div>

          {/* Right: tilted cover image or gradient placeholder */}
          <div className="sm:w-[45%] relative h-[180px] sm:h-[200px]">
            <motion.div
              className="absolute inset-0 overflow-hidden rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
              style={{ transform: `rotate(${rot}deg)` }}
              whileHover={{ rotate: 0, scale: 1.03 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              {project.coverImage ? (
                <Image
                  src={encodeURI(`/assets/${project.coverImage}`)}
                  alt={project.title}
                  fill
                  className="object-cover"
                  style={{ objectPosition: project.coverPosition ?? 'center' }}
                  sizes="(max-width: 640px) 100vw, 40vw"
                />
              ) : (
                <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-end p-4`}>
                  <span className="font-tight text-xs font-medium text-black/40 uppercase tracking-widest">
                    {primaryRole}
                  </span>
                </div>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </motion.button>
  )
}
