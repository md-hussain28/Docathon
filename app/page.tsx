import { SpaceTimeGrid } from "@/components/space-time-grid"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import EventTimeline from "@/components/event-timeline"
import DualComponents from "@/components/dual-components"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0D0D0D] text-white overflow-hidden">
      <SpaceTimeGrid />
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <EventTimeline />
        <DualComponents />
        <Footer />
      </div>
    </main>
  )
}

