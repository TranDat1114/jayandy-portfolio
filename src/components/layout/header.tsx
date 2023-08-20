import Link from "next/link";
import { MobileMenu  } from "../menu/mobileMenu";
export default function Header() {

    return (
        //Desktop and tablet header
        <header className="sticky backdrop-blur-md z-50 border-b p-2 top-0 max-h-20 w-ful">
            <div className="container flex h-14 flex-row justify-between items-center">
                <Link className="text-3xl font-extrabold tracking-tighter lg:text-5xl underline shadow-transparent drop-shadow-md" href="/">Jay Andy</Link>
                <nav className="desktop-menu"></nav>
                <nav className="mobile-menu">
                    <div>
                        <MobileMenu/>                       
                    </div>
                </nav>
            </div>
        </header>
    )
}
