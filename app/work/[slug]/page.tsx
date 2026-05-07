import { notFound } from 'next/navigation'
import { projects } from '@/lib/projects'
import CaseStudyClient from '@/components/work/CaseStudyClient'

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return {}
  return {
    title: `${project.title} — Anne Orlenadja`,
    description: project.description.slice(0, 160),
  }
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) notFound()

  return <CaseStudyClient project={project} />
}
