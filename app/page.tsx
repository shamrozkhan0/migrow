import Hero from "@/components/home/Hero"
import Positioning from "@/components/home/Positioning"
import Navbar from "@/components/layout/Navbar"
import Problem from "@/components/home/Problem"

export default function Home(){
  return(
    <>
    <Navbar/>

      <main>
        <Hero/>
        <Positioning/>
        <Problem/>
      </main>

  </>
  )
}
