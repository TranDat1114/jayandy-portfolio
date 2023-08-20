import { ProfileCard } from "@/components/mainPage/profileCard"
import { HeroTextBanner } from "@/components/mainPage/heroTextBanner"

export default function Home() {

  return (

    <div id="hero-section" className='grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 relative'>
      <div className="col-span-1 md:col-span-3 lg:col-span-6">
        <div className="w-full h-[400px] lg:h-[500px]">
          <ProfileCard />

        </div>

      </div>
      <div className="col-span-1 md:col-span-3 lg:col-span-6">
        <HeroTextBanner />
      </div>
    </div>
  )
}
