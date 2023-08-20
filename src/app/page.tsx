import { ProfileCard } from "@/components/mainPage/profileCard"
import { HeroTextBanner } from "@/components/mainPage/heroTextBanner"
import LoremTest from "@/components/mainPage/loremTest"

export default function Home() {

  return (
    <>
      <div id="hero-section-1" className='grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 relative'>
        <div className="col-span-1 md:col-span-3 lg:col-span-6">
          <div className="w-full h-[400px] lg:h-[500px]">
            <ProfileCard />

          </div>

        </div>
        <div className="col-span-1 md:col-span-3 lg:col-span-6">
          <HeroTextBanner />
        </div>
      </div>
      <div id="hero-section-2" className="h-screen">
      </div>
      <LoremTest />
    </>
  )
}
