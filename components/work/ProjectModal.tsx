'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Project, getInstagramEmbedUrl } from '@/lib/projects'
import { useLenis } from '@/components/SmoothScroll'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

/* ── Video card: autoplay muted, click to toggle sound ── */
function VideoCard({ src, scrollRoot }: { src: string; scrollRoot: React.RefObject<HTMLDivElement> }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [muted, setMuted] = useState(true)

  const toggle = () => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
    if (v.paused) v.play()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ root: scrollRoot, once: true, margin: '-48px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full overflow-hidden rounded-2xl bg-black"
      style={{ aspectRatio: '16/9' }}
    >
      <video ref={videoRef} autoPlay muted loop playsInline className="w-full h-full object-cover">
        <source src={encodeURI(`/assets/${src}`)} />
      </video>
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
      <button
        onClick={toggle}
        className="absolute bottom-3 right-3 flex items-center gap-1.5 font-tight text-[11px] font-medium text-white bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full px-3 py-1.5 transition-all duration-200"
      >
        {muted ? (
          <>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06A8.99 8.99 0 0 0 17.73 18L19 19.27 20.27 18 5.27 3 4.27 3zM12 4 9.91 6.09 12 8.18V4z" />
            </svg>
            No sound
          </>
        ) : (
          <>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
            </svg>
            With sound
          </>
        )}
      </button>
      <span className="absolute top-3 left-3 font-tight text-[10px] font-medium tracking-widest uppercase text-white/70 bg-black/30 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
        Playing
      </span>
    </motion.div>
  )
}

/* ── Instagram post/reel embed ── */
function InstagramPost({ url, scrollRoot }: { url: string; scrollRoot: React.RefObject<HTMLDivElement> }) {
  const embedUrl = getInstagramEmbedUrl(url)
  const isReel = url.includes('/reel/')

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ root: scrollRoot, once: true, margin: '-48px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={isReel ? 'flex justify-center' : 'w-full'}
    >
      <div
        className="overflow-hidden rounded-2xl bg-white w-full"
        style={isReel
          ? { maxWidth: 360, height: 680 }
          : { height: 560 }
        }
      >
        <iframe
          src={embedUrl}
          className="w-full h-full border-0"
          scrolling="no"
          allowTransparency
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
      </div>
    </motion.div>
  )
}

/* ── Aspect ratio sequence for images ── */
const RATIOS = ['16/9', '4/3', '3/2', '4/3', '16/9', '3/2']

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const lenis = useLenis()

  const allImages = project?.images ?? []

  /* Pause Lenis + lock body scroll */
  useEffect(() => {
    if (project) {
      lenis?.stop()
      document.body.style.overflow = 'hidden'
      if (scrollRef.current) scrollRef.current.scrollTop = 0
      setLightboxIndex(null)
    } else {
      lenis?.start()
      document.body.style.overflow = ''
    }
    return () => {
      lenis?.start()
      document.body.style.overflow = ''
    }
  }, [project, lenis])

  /* Keyboard navigation */
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (lightboxIndex !== null) {
      if (e.key === 'ArrowRight') setLightboxIndex(i => i !== null ? Math.min(i + 1, allImages.length - 1) : null)
      if (e.key === 'ArrowLeft')  setLightboxIndex(i => i !== null ? Math.max(i - 1, 0) : null)
      if (e.key === 'Escape')     setLightboxIndex(null)
    } else {
      if (e.key === 'Escape') onClose()
    }
  }, [lightboxIndex, allImages.length, onClose])

  useEffect(() => {
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [handleKey])

  return (
    <>
      <AnimatePresence>
        {project && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/20"
              onClick={onClose}
            />

            {/* Panel */}
            <motion.div
              key="panel"
              initial={{ y: '100%', opacity: 0.6 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: 'fixed', top: 8, left: 8, right: 8, bottom: 102, zIndex: 50 }}
              className="bg-[#f5f5f5] rounded-[24px] overflow-hidden flex flex-col"
            >
              {/* Top bar */}
              <div className="flex items-start justify-between px-6 py-5 shrink-0 border-b border-black/8 bg-[#f5f5f5]">
                <div className="pr-4">
                  <span className="font-tight text-[10px] text-muted font-medium tracking-widest uppercase block mb-1">
                    {project.category} · {project.year}
                  </span>
                  <h2
                    className="font-tight font-bold text-black leading-tight"
                    style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)', letterSpacing: '-0.02em' }}
                  >
                    {project.title}
                  </h2>
                  <p
                    className="font-tight text-sm text-black/55 font-medium mt-1.5 leading-snug"
                    style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
                  >
                    {project.description}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="shrink-0 flex items-center justify-center w-9 h-9 rounded-xl bg-black/8 hover:bg-black/15 transition-colors duration-200 text-black text-xl font-light"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 px-6 py-3 shrink-0 border-b border-black/6">
                {project.tags.map(tag => (
                  <span key={tag} className="font-tight text-[11px] font-medium px-2.5 py-1 rounded-full bg-white text-black/50 border border-black/8">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Scrollable body */}
              <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto overscroll-contain"
                style={{ touchAction: 'pan-y', WebkitOverflowScrolling: 'touch' } as React.CSSProperties}
                onWheel={e => e.stopPropagation()}
              >
                <div className="px-4 sm:px-10 py-8 max-w-2xl mx-auto w-full">

                  {/* ── Images ── */}
                  {allImages.length > 0 && (
                    <div className="space-y-5">
                      <p className="font-tight text-[10px] text-muted uppercase tracking-[0.12em]">
                        {allImages.length} {allImages.length === 1 ? 'image' : 'images'}
                      </p>
                      {allImages.map((img, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 36 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ root: scrollRef, once: true, margin: '-48px' }}
                          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <button
                            onClick={() => setLightboxIndex(i)}
                            className="group relative w-full overflow-hidden rounded-2xl bg-white block focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                            style={{ aspectRatio: RATIOS[i % RATIOS.length], touchAction: 'manipulation' }}
                          >
                            <Image
                              src={encodeURI(`/assets/${img}`)}
                              alt={`${project.title} — ${i + 1}`}
                              fill
                              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                              sizes="(max-width: 640px) 100vw, 672px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                            <span className="absolute bottom-3 left-4 font-tight text-white text-xs font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                              View full size →
                            </span>
                          </button>
                          <span className="mt-2 block font-tight text-[10px] text-muted/60 tabular-nums text-right tracking-widest">
                            {String(i + 1).padStart(2, '0')} / {String(allImages.length).padStart(2, '0')}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* ── Videos ── */}
                  {project.videos.length > 0 && (
                    <div className={`space-y-5 ${allImages.length > 0 ? 'mt-10' : ''}`}>
                      <p className="font-tight text-[10px] text-muted uppercase tracking-[0.12em]">
                        {project.videos.length} {project.videos.length === 1 ? 'video' : 'videos'}
                      </p>
                      {project.videos.map((vid, i) => (
                        <VideoCard key={i} src={vid} scrollRoot={scrollRef} />
                      ))}
                    </div>
                  )}

                  {/* ── Instagram Posts ── */}
                  {project.instagramPosts && project.instagramPosts.length > 0 && (
                    <div className={`space-y-5 ${allImages.length > 0 || project.videos.length > 0 ? 'mt-10' : ''}`}>
                      <p className="font-tight text-[10px] text-muted uppercase tracking-[0.12em] flex items-center gap-2">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" className="opacity-50">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                        </svg>
                        {project.instagramPosts.length} {project.instagramPosts.length === 1 ? 'post' : 'posts'} on Instagram
                      </p>
                      {project.instagramPosts.map((url, i) => (
                        <InstagramPost key={i} url={url} scrollRoot={scrollRef} />
                      ))}
                    </div>
                  )}

                  {/* Empty state */}
                  {allImages.length === 0 && project.videos.length === 0 && (!project.instagramPosts || project.instagramPosts.length === 0) && (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                      <div className="w-12 h-12 rounded-2xl bg-black/6 flex items-center justify-center mb-4 text-xl">📁</div>
                      <p className="font-tight text-sm text-muted font-medium">Nenhum conteúdo ainda.</p>
                      <p className="font-tight text-xs text-muted/60 mt-1">Adicione em lib/projects.ts</p>
                    </div>
                  )}

                  {/* Full description */}
                  <details className="mt-10 group">
                    <summary className="font-tight text-[10px] font-medium text-muted uppercase tracking-[0.12em] cursor-pointer list-none flex items-center gap-2 hover:text-black transition-colors duration-200 select-none">
                      <span className="group-open:hidden">↓</span>
                      <span className="hidden group-open:inline">↑</span>
                      Full description
                    </summary>
                    <p className="font-tight text-sm text-black/60 leading-relaxed font-medium mt-4 pb-8">
                      {project.description}
                    </p>
                  </details>

                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {project && lightboxIndex !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-black/92 flex items-center justify-center"
            onClick={() => setLightboxIndex(null)}
          >
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.93, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.93, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full max-w-5xl mx-auto px-12 py-10 flex items-center justify-center"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src={encodeURI(`/assets/${allImages[lightboxIndex]}`)}
                  alt={`${project.title} — ${lightboxIndex + 1}`}
                  fill className="object-contain" sizes="100vw" priority
                />
              </div>
            </motion.div>

            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-xl bg-white/12 hover:bg-white/22 transition-colors text-white text-xl backdrop-blur-sm"
            >×</button>

            {lightboxIndex > 0 && (
              <button
                onClick={e => { e.stopPropagation(); setLightboxIndex(i => i !== null ? i - 1 : null) }}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-11 h-11 rounded-xl bg-white/12 hover:bg-white/22 transition-colors text-white text-lg backdrop-blur-sm"
              >←</button>
            )}

            {lightboxIndex < allImages.length - 1 && (
              <button
                onClick={e => { e.stopPropagation(); setLightboxIndex(i => i !== null ? i + 1 : null) }}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-11 h-11 rounded-xl bg-white/12 hover:bg-white/22 transition-colors text-white text-lg backdrop-blur-sm"
              >→</button>
            )}

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 font-tight text-xs text-white/55 font-medium bg-black/40 rounded-full px-4 py-1.5 backdrop-blur-sm tabular-nums">
              {lightboxIndex + 1} / {allImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
