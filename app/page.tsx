import Hero from '@/components/sections/Hero'
import Work from '@/components/sections/Work'
import About from '@/components/sections/About'
import ResumeExtras from '@/components/sections/ResumeExtras'
import Process from '@/components/sections/Process'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <Work />
      <About />
      <ResumeExtras />
      <Process />
      <Contact />
      <Footer />
    </main>
  )
}
