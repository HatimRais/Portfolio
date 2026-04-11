import { GradientBackground } from "./components/ui/GradientBackground"
import { FloatingParticles } from "./components/ui/FloatingParticles"
import { Navbar } from "./components/layout/Navbar"
import { Footer } from "./components/layout/Footer"
import { CommandPalette } from "./components/layout/CommandPalette"
import { Hero } from "./components/sections/Hero"
import { About } from "./components/sections/About"
import { MyExpertise } from "./components/sections/MyExpertise"
import { Skills } from "./components/sections/Skills"
import { FullstackSection } from "./components/sections/FullstackSection"
import { Projects } from "./components/sections/Projects"
import { CaseStudies } from "./components/sections/CaseStudies"
import { Metrics } from "./components/sections/Metrics"
import { HowIWork } from "./components/sections/HowIWork"
import { TestingSecurity } from "./components/sections/TestingSecurity"
import { CurrentlyLearning } from "./components/sections/CurrentlyLearning"
import { AISection } from "./components/sections/AISection"
import { AIInAction } from "./components/sections/AIInAction"
import { Contact } from "./components/sections/Contact"

function App() {
  return (
    <div className="relative min-h-dvh overflow-x-clip text-slate-900 dark:text-slate-100">
      <GradientBackground />
      <FloatingParticles />
      <Navbar />
      <CommandPalette />
      <main className="overflow-x-clip">
        <Hero />
        <About />
        <MyExpertise />
        <Skills />
        <FullstackSection />
        <Projects />
        <CaseStudies />
        <Metrics />
        <HowIWork />
        <TestingSecurity />
        <CurrentlyLearning />
        <div id="ai" className="scroll-mt-24">
          <AISection />
          <AIInAction />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
