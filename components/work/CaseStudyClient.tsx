'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/lib/projects'

export default function CaseStudyClient({ project }: { project: Project }) {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative w-full" style={{ height: '60vh', minHeight: 320 }}>
        <Image
          src={encodeURI(`/assets/${project.coverImage}`)}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.6))' }}
        />
        <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-10 pb-10 max-w-[1200px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="font-tight text-xs text-white/60 font-medium tracking-widest uppercase block mb-3">
              {project.category} · {project.year}
            </span>
            <h1
              className="font-tight font-bold text-white leading-tight"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.03em' }}
            >
              {project.title}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {project.tags.map((tag) => (
            <span key={tag} className="font-tight text-xs font-medium px-3 py-1.5 rounded-full bg-surface text-black/70">
              {tag}
            </span>
          ))}
        </div>

        {/* Description + meta */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-10 mb-14">
          <p className="font-tight text-base text-black/65 leading-relaxed font-medium">{project.description}</p>
          <div className="space-y-5">
            <div>
              <p className="font-tight text-xs text-muted uppercase tracking-widest mb-1">Category</p>
              <p className="font-tight text-sm text-black font-medium">{project.category}</p>
            </div>
            <div>
              <p className="font-tight text-xs text-muted uppercase tracking-widest mb-1">Year</p>
              <p className="font-tight text-sm text-black font-medium">{project.year}</p>
            </div>
          </div>
        </div>

        {/* Gallery */}
        {project.images.length > 0 && (
          <div className="mb-14">
            <p className="font-tight text-xs text-muted uppercase tracking-widest mb-6">Gallery</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {project.images.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative overflow-hidden rounded-2xl bg-surface ${i === 0 ? 'sm:col-span-2 lg:col-span-2' : ''}`}
                  style={{ aspectRatio: i === 0 ? '16/9' : '1' }}
                >
                  <Image
                    src={encodeURI(`/assets/${img}`)}
                    alt={`${project.title} ${i + 1}`}
                    fill
                    className="object-cover hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Videos */}
        {project.videos.length > 0 && (
          <div className="mb-14">
            <p className="font-tight text-xs text-muted uppercase tracking-widest mb-6">Videos</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.videos.map((vid, i) => (
                <video key={i} controls playsInline preload="metadata" className="w-full rounded-2xl bg-surface">
                  <source src={encodeURI(`/assets/${vid}`)} />
                </video>
              ))}
            </div>
          </div>
        )}

        {/* Back */}
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 pill-btn bg-surface text-black/70 hover:text-black text-sm"
        >
          ← Back to Work
        </Link>
      </div>
    </main>
  )
}
