import { PigCard } from "@/components/mainPage/pigCard"
import { HeroTextBanner } from "@/components/mainPage/heroTextBanner"
import LoremTest from "@/components/mainPage/loremTest"
import { ProfileCard } from "@/components/mainPage/profileCard"

export default function Home() {

  return (
    <div className="grid grid-flow-row gap-y-20 grid-cols-1 lg:my-6">
      <div id="hero-section-1" className='grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 relative gap-20'>
        <div className="col-span-1 md:col-span-3 lg:col-span-6">
          <div className="w-full">
            <ProfileCard />
          </div>
        </div>
        <div className="col-span-1 md:col-span-3 lg:col-span-6">
          <HeroTextBanner />
        </div>
      </div>
      <div id="hero-section-2" className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 relative gap-5">
        <div className="col-span-1 md:col-span-2 lg:col-span-5">
          <div className="w-full">
          </div>
        </div>
        <div className="col-span-1 md:col-span-4 lg:col-span-7">
          <PigCard />
        </div>
      </div>
      <LoremTest />
    </div>
  )
}
