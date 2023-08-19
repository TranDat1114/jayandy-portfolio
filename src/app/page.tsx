

import Image from "next/image"
import jayandy from "../../public/assets/jayandy.png"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { ProfileCard } from "@/components/mainPage/profileCard"


export default function Home() {

  return (

    <div id="hero-section" className='grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 relative'>
      <div className="col-span-1 md:col-span-3 lg:col-span-6">
        <div className="w-full h-[400px] lg:h-[500px]">
          <ProfileCard />

        </div>

      </div>
      <div className="col-span-1 md:col-span-3 lg:col-span-6">
        <div className="">
        <p className="text-lg font-normal mb-5">
          ~ Introduction
        </p>
        <p className="text-4xl font-extrabold mb-10">
          Say Hi from <strong className="text-primary">JayAndy</strong>, Software Developer
        </p>
        <em className="font-light text-muted-foreground">“I sometimes analyze, sometimes program, and sometimes design”</em>
        </div>
      </div>
    </div>
  )
}
