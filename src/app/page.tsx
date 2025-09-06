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
import { PainPointsSolutions } from "@/components/sections/pain-points-solutions"
import { SolutionsCards } from "@/components/sections/solutions-cards"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PainPointsSolutions />
        <SolutionsCards />
        <TrustedBrands />
        <TransformationProcess />
        <Solutions />
        <Statistics />
        <WhyChooseUs />
        <CaseStudies />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
