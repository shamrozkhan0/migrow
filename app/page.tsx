import Hero from "@/components/home/Hero"
import Positioning from "@/components/home/Positioning"
import Navbar from "@/components/layout/Navbar"
import Problem from "@/components/home/Problem"
import WhatWeDo from "@/components/home/WhatWeDo"

export default function Home(){
  return(
    <>
    <Navbar/>

      <main>
        <Hero/>
        <Positioning/>
        <Problem/>
        <WhatWeDo/>
      </main>

  </>
  )
}
