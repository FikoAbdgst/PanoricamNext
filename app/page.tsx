import Content from "./components/Content"
import Hero from "./components/Hero"
import HowItWorks from "./components/HowItWorks"
import Testimoni from "./components/Testimoni"

export default function Home() {
  return (
    <>
      <Hero />
      <div id="content_section">
        <Content />
      </div>
      <HowItWorks />
      <Testimoni />
    </>
  )
}
