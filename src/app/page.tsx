import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { TransformationProcess } from "@/components/sections/transformation-process"
import { Solutions } from "@/components/sections/solutions"
import { Statistics } from "@/components/sections/statistics"
import { TrustedBrands } from "@/components/sections/trusted-brands"
import { CaseStudies } from "@/components/sections/case-studies"
import { Testimonials } from "@/components/sections/testimonials"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TransformationProcess />
        <Solutions />
        <Statistics />
        <TrustedBrands />
        <WhyChooseUs />
        <CaseStudies />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
